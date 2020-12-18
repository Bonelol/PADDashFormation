如何获取怪物数据 | How to acquire monster data
===

* 目前的获取API为  
The current acquisition API is

	| 语言 | API |
	| --- | --- |
	| 日语(ja) | https://api-adrv2.padsv.gungho.jp/api.php?action=download_card_data<br>https://api-adrv2.padsv.gungho.jp/api.php?action=download_skill_data |
	| 英语(en) | https://api-na-adrv2.padsv.gungho.jp/api.php?action=download_card_data<br>https://api-na-adrv2.padsv.gungho.jp/api.php?action=download_skill_data |
	| 韩语(ko) | https://api-kr-adrv2.padsv.gungho.jp/api.php?action=download_card_data<br>https://api-kr-adrv2.padsv.gungho.jp/api.php?action=download_skill_data |

* 但是有加密的参数，我不知道如何生成，所以我只能从游戏的下载过程截获。  
But there are encrypted parameters that I don't know how to generate. So I intercepted from the game's download process.

* 使用[Fidder](https://www.telerik.com/download/fiddler)，执行*HTTPS中间人攻击*从游戏内抓包获得怪物信息。  
Use [Fidder](https://www.telerik.com/download/fiddler), do *HTTPS man-in-the-middle attack* to capture monster information from in-game capture.  

* 安卓5可以直接在安卓系统里安装 *CER* 证书，但安卓7开始，系统不再信任用户证书。  
Android 5 can install *CER* certificates directly in Android. Starting with Android 7, the system no longer trusts user certificates.

* 如果你的模拟器需要安卓7才能玩智龙迷城。以[夜神模拟器](https://www.bignox.com/)为例，在安卓7里安装智龙迷城。  
If your simulator needs Android 7 to play PAD. Take the [Nox Player](https://www.bignox.com/) for example. Install PAD in Android 7.

	1. 将 Fidder 根证书导出到桌面  
	Export the Fidder Root Certificate to desktop
	1. 在电脑上找一个 **openssl.exe** 程序  
	Find an **opensl.exe** program on computer
	1. 执行代码，将证书由 *CER* 转换为 *PEM* 格式  
	Execute the code to convert the certificate from *CER* to *PEM* format  
	`openssl x509 -inform DER -in FiddlerRoot.cer -out cacert.pem`
	1. 执行代码，获取证书的hash（第一行）  
	Execute the code to get the hash of the certificate (first line)  
	`openssl x509 -inform PEM -subject_hash_old -in cacert.pem`
	1. 将证书重命名为`[hash].0`，如`269953fb.0`  
	Rename the certificate to `[hash.0]`,like `269953fb.0`
	1. 打开安卓模拟器的**Root**  
	Turn on the **Root** of the Android simulator
	1. 将证书复制到`/system/etc/security/cacerts/`，并修改为 **644** 权限  
	Copy the certificate to `/system/etc/security/cacerts/` and modify it to **644** permissions
	1. **重启**安卓模拟器  
	**Restart** the Android simulator
	1. 关闭安卓模拟器的 **Root**  
	Turn off the **Root** of the Android simulator

	参考/Reference: https://www.jianshu.com/p/035f7d7a0f7e


* 将安卓模拟器内的 WiFi 代理设置到 Fidder 上  
Set up the WiFi proxy in the Android emulator to Fidder

* 打开 Fidder 的 HTTPS 解密，和 GZIP 解码  
Turn on Fidder's HTTPS decrypt and GZIP decode

* 现在你运行模拟器内的游戏，Fidder 就能够截获和解密智龙迷城的数据了。将返回的 JSON 数据保存为文件。  
Now that you're running the game inside the simulator, Fidder will be able to intercept and decrypt the data from the PAD. Save the response JSON data as a file.

* 将以下代码加入 Fidder 的自定义代码的`OnBeforeResponse`中就可以每次自动保存文件了。  
Add the following code to `OnBeforeResponse` of Fidder's **Customize Rules** to save the file automatically each time.

	```js
	//自动储存智龙迷城数据
	var PADDataPath = "D:\\PADDashFormation\\monsters-info\\official-API\\";
	if (oSession.HostnameIs("api-adr.padsv.gungho.jp") //日服域名
		|| oSession.HostnameIs("api-ht-adr.padsv.gungho.jp") //港台服域名
		|| oSession.HostnameIs("api-na-adrv2.padsv.gungho.jp") //美服域名
		|| oSession.HostnameIs("api-kr-adrv2.padsv.gungho.jp") //韩服域名
	) {
		var serverName;
		switch (oSession.hostname)
		{
			case "api-adr.padsv.gungho.jp": //日服域名
			case "api-ht-adr.padsv.gungho.jp": //港台服域名
				serverName = "ja"
				break;
			case "api-na-adrv2.padsv.gungho.jp": //美服域名
				serverName = "en"
				break;
			case "api-kr-adrv2.padsv.gungho.jp": //韩服域名
				serverName = "ko"
				break;
		}
		if (oSession.uriContains("download_card_data")) { //自动保存怪物数据
			oSession.SaveResponseBody(PADDataPath + serverName + "-card.json")
		}
		if (oSession.uriContains("download_skill_data")) { //自动保存技能数据
			oSession.SaveResponseBody(PADDataPath + serverName + "-skill.json")
		}
		/*
		if (oSession.uriContains("download_dungeon_data")) { //自动保存地下城数据
			oSession.SaveResponseBody(PADDataPath + serverName + "-dungeon.json")
		}
		if (oSession.uriContains("download_limited_bonus_data")) { //自动保存limited_bonus数据
			oSession.SaveResponseBody(PADDataPath + serverName + "-limited_bonus.json")
		}
		if (oSession.uriContains("download_enemy_skill_data")) { //自动保存敌人技能数据
			oSession.SaveResponseBody(PADDataPath + serverName + "-enemy_skill.json")
		}
		if (oSession.uriContains("shop_item")) { //自动保存商店数据
			oSession.SaveResponseBody(PADDataPath + serverName + "-shop_item.json")
		}
		if (oSession.uriContains("mdatadl")) { //自动保存交换所数据
			oSession.SaveResponseBody(PADDataPath + serverName + "-mdatadl.json")
		}
		*/
	}
	```

* 使用 [pad-rikuu](//github.com/kiootic/pad-rikuu) 的 Card 解析代码  
Parse  Using the Card parsing code of the [pad-rikuu](//github.com/kiootic/pad-rikuu).

* 运行`提取整合怪物信息.bat`   
Execute the following code in CMD
	```bat
	node.exe extractByNode.js
	```
* 会将每种语言的信息提取到一个文件内，互相之间也保留有不同语言的怪物名称、标签数据  
Each language's information is extracted into a file, and monster names and tag data in different languages are retained from each other

---
### Only For 🇨🇳Chinese

`CHT.json`与`CHS.json`的中文信息来源于战友网，见子项目 https://github.com/Mapaler/Download-pad.skyozora.com

运行`提取中文数据.bat`，将战友网页面内容抽出，再使用Win64版 [OpenCC](https://github.com/BYVoid/OpenCC) 来繁转简。
然后再运行一遍 `提取整合怪物信息.bat` 把中文插进去。