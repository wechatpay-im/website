---
title: 数据签名
description: 微信支付目前现行两大类数据签名方法，对称算法基于MD5及HMAC-SHA256数据摘要算法，非对称算法基于RSA-OAEP(模数2048)算法。
aside: true
---

# {{ $frontmatter.title }} {#rules}

{{ $frontmatter.description }}

## 对称算法 {#symmetric}

签名生成的**通用步骤**如下：

第一步：

设所有发送或者接收到的数据为**集合M**，将**集合M**内非空参数值的参数按照**参数名**ASCII码从小到大排序(**字典序**)，使用**URL键值对的格式**(即key1=value1&key2=value2…)拼接成字符串**stringA**。

> [!IMPORTANT] 特别注意以下重要规则：
>
> - **参数名**ASCII码从小到大排序（**字典序**）；
> - 如果参数的**值为空不参与签名**；
> - 参数名区分大小写；
> - 验证调用返回或微信主动通知签名时，传送的**sign参数不参与签名**，将**生成的签名与该sign值作校验**；
> - 微信支付接口可能增加字段，验证签名时必须支持增加的扩展字段；

第二步：

在**stringA**最后拼接上**key**得到**stringSignTemp**字符串，并对**stringSignTemp**进行**MD5/HMAC-SHA256**运算，再将得到的字符串所有字符**转换为大写**，得到sign值**signValue**。

> [!IMPORTANT] 特别注意：
>
> - **密钥key**的长度为32个字节；
> - key设置路径：[微信商户平台](https://pay.weixin.qq.com/) -> 账户中心 -> 账户设置 -> API安全 -> 设置API密钥；

微信支付API接口协议中包含字段**nonce_str**，主要保证签名不可预测。微信支付官方推荐生成随机数算法如下：**调用随机数函数生成，将得到的值转换为字符串**。

以[官方文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=4_3)举的例子，用`PHP`实现：

### 后台数据交换 {#symmetric.backend}

设传送的参数 **集合 $collection** 如下：

```php
$collection = [
  'appid' => 'wxd930ea5d5a258f4f',
  'mch_id' => '10000100',
  'device_info' => '1000',
  'body' => 'test',
  'nonce_str' => 'ibuaiVcKdpRxkhJA'
];
```

第一步：按照**参数名**ASCII**字典序**并对参数按照**URL键值对的格式**拼接如下：

```php
$stringA = 'appid=wxd930ea5d5a258f4f&body=test&device_info=1000&mch_id=10000100&nonce_str=ibuaiVcKdpRxkhJA';
```

第二步：拼接API**密钥key**：

```php
use WeChatPay\Crypto\Hash;

//注：key为商户平台设置的密钥key
$stringSignTemp = $stringA . '&key=192006250b4c09247ec02edce69f6a2d';

//注：MD5签名方式
$sign = \strtoupper(Hash::md5($stringSignTemp));
//样本值='9A0A8659F005D6984697E2CA0A9CF3B7'

//注：HMAC-SHA256签名方式，部分语言的hmac方法生成结果二进制结果，需要调对应函数转化为十六进制字符串。
$sign = \strtoupper(Hash::hmac($stringA, $key, 'sha256'));
//样本值='6A9AE1657590FD6257D693A078E1C3E4BB6BA4DC30B23E0EE2496E54170DACD6'
```

则传输的数据即为:

```php
$collection = [
  'appid' => $appId,
  'mch_id' => $mchId,
  'device_info' => '1000',
  'body' => 'test',
  'nonce_str' => 'ibuaiVcKdpRxkhJA',
  //以MD5为例
  'sign' => '9A0A8659F005D6984697E2CA0A9CF3B7'
];
```

APIv2是以`XML`格式作为数据交换方式，则需转换上述数据为`XML`文本格式如下:

```xml
<xml>
  <appid>wxd930ea5d5a258f4f</appid>
  <mch_id>10000100</mch_id>
  <device_info>1000</device_info>
  <body>test</body>
  <nonce_str>ibuaiVcKdpRxkhJA</nonce_str>
  <sign>9A0A8659F005D6984697E2CA0A9CF3B7</sign>
</xml>
```

> [!TIP] 以上签名及数据格式转换过程，用本开发包即如下：
> ```php
> // 对集合M按参数名字典序排列 -> URL风格拼接数据 -> 数据签名并把值大写
> use WeChatPay\Formatter;
> use WeChatPay\Transformer;
> use WeChatPay\Crypto\Hash;
>
> // 计算签名并把签名值大写
> $collection['sign'] = \strtoupper(Hash::md5(
>   // URL风格拼接数据
>   Formatter::queryStringLike(
>     // 按参数名字典序排列
>     Formatter::ksort($collection)
>   ),
>   $key
> ));
>
> // 或者使用封装的`Hash::sign`方法简化如下
> $collection['sign'] = Hash::sign(Hash::ALGO_MD5, $collection, $key);
>
> // 转换为`XML`文本
> $xml = Transformer::toXml($collection);
> ```

### 前台数据交换 {#symmetric.frontend}

此种方式也遵循 **通用步骤** 原则，只是 **集合 $collection** 按业务表现不同而不同，归纳如下：

#### 现金支付 {#symmetric.frontend.cashpay}

> [!TIP] JSAPI 唤起微信支付收银台场景
> ```php
> use WeChatPay\Formatter;
> use WeChatPay\Crypto\Hash;
>
> $nonceStr = Formatter::nonce();
> $timeStamp = (string) Formatter::timestamp();
> $package = 'prepay_id=' . $prepayId;
> // previousSignType 即后台调用 unifiedorder 接口时的签名方法
> $signType = $previousSignType ?? Hash::ALGO_MD5;
> $collection = [
>    'appId' => $appId,
>    'timeStamp' => $timeStamp,
>    'nonceStr' => $nonceStr,
>    'package' => $package,
>    'signType' => $signType
>  ];
>
> $collection['paySign'] = Hash::sign($signType, $collection, $key); // [!code hl]
>
> echo \json_encode($collection);
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6) [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=5)

> [!TIP] APP 唤起微信支付收银台场景
> ```php
> use WeChatPay\Formatter;
> use WeChatPay\Crypto\Hash;
>
> $nonceStr = Formatter::nonce();
> $timeStamp = (string) Formatter::timestamp();
> $package = 'Sign=WXPay';
> // previousSignType 即后台调用 unifiedorder 接口时的签名方法
> $signType = $previousSignType ?? Hash::ALGO_MD5;
> $collection = [
>    'appid' => $appId,
>    'partnerid' => $mchId,
>    'timestamp' => $timeStamp,
>    'noncestr' => $nonceStr,
>    'package' => $package,
>    'prepayid' => $prepayId
>  ];
>
> $collection['sign'] = Hash::sign($signType, $collection, $key); // [!code hl]
>
> echo \json_encode($collection);
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_12&index=2)

#### 小程序红包 {#symmetric.frontend.wxaredpack}

> [!TIP] 微信小程序 唤起发放小程序红包场景
> ```php
> use WeChatPay\Formatter;
> use WeChatPay\Crypto\Hash;
>
> $nonceStr = Formatter::nonce();
> $timeStamp = (string) Formatter::timestamp();
> // 签名方法为固定值
> $signType = Hash::ALGO_MD5;
> $collection = [
>   'appId' => $appId,
>   'timeStamp' => $timeStamp,
>   'nonceStr' => $nonceStr,
>   // packageStr 即后台调用 sendminiprogramhb 接口的 package 返回字符串
>   'package' => \urlencode($package)
>  ];
>
> $collection['paySign'] = Hash::sign($signType, $collection, $key); // [!code hl]
> $collection['signType'] = $signType;
>
> echo \json_encode($collection);
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon_xcx.php?chapter=18_3&index=4)

#### 代金券/商家券 {#symmetric.frontend.favors}

> [!TIP] 小程序发券插件
> ```php
> use WeChatPay\Crypto\Hash;
>
> $sendCouponParams = [[
>   'stock_id' => '123',
>   'out_request_no' => 'R123'
> ], [
>   'stock_id' => '456',
>   'out_request_no' => 'R456'
> ]];
> $flatParams = ['send_coupon_merchant' => $sendCouponMerchant];
>
> foreach ($sendCouponParams as $index => $coupon) {
>    foreach ($coupon as $key => $value) {
>      $flatParams[$key . $index] = $value;
>    }
> }
>
> // 签名方法为固定值
> $signType = Hash::ALGO_HMAC_SHA256;
> $flatParams['sign'] = Hash::sign($signType, $flatParams, $key); // [!code hl]
>
> echo \json_encode($flatParams);
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_3_1.shtml)

> [!TIP] 通过Url跳转，由商户H5重定向至指定微信支付H5页面
> ```php
> use WeChatPay\Crypto\Hash;
> use GuzzleHttp\Psr7\Uri;
> use GuzzleHttp\Psr7\Query;
>
> // 签名方法为固定值
> $signType = Hash::ALGO_HMAC_SHA256;
> $query = [
>   'stock_id' => $stockId,
>   'out_request_no' => $outRequestNo,
>   'send_coupon_merchant' => $sendCouponMerchant,
>   'open_id' => $openId,
>   'coupon_code' => $couponCode
> ];
>
> $query['sign'] = Hash::sign($signType, $query, $key); // [!code hl]
>
> $actionUrl = 'https://action.weixin.qq.com/busifavor/getcouponinfo';
> $redirectUrl = (string) (new Uri($actionUrl))
>  ->withQuery(Query::build($query))
>  ->withFragment('wechat_redirect');
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_4_1.shtml)

#### 微信支付分 {#symmetric.frontend.payscore}

> [!TIP] APP 唤起微信支付分小程序订单详情场景
> ```php
> use WeChatPay\Formatter;
> use WeChatPay\Crypto\Hash;
> use GuzzleHttp\Psr7\Query;
>
> $nonceStr = Formatter::nonce();
> $timeStamp = (string) Formatter::timestamp();
>
> // 签名方法为固定值
> $signType = Hash::ALGO_HMAC_SHA256;
> $input = [
>   'mch_id' => $mchId,
>   'service_id' => $serviceId,
>   'out_order_no' => \urlencode($outOrderNo),
>   'timestamp' => $timeStamp,
>   'nonce_str' => $nonceStr,
>   'sign_type' => $signType
> ];
> $input['sign'] = Hash::sign($signType, $input, $key); // [!code hl]
>
> $data = [
>   'businessType' => 'wxpayScoreDetail',
>   'query' => Query::build($input),
>   'extInfo' => [
>     'miniProgramType' => 0
>   ]
> ];
>
> echo \json_encode($data);
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_24.shtml)

> [!TIP] JSAPI 唤起微信支付分小程序订单详情场景
> ```php
> use WeChatPay\Formatter;
> use WeChatPay\Crypto\Hash;
> use GuzzleHttp\Psr7\Query;
>
> $nonceStr = Formatter::nonce();
> $timeStamp = (string) Formatter::timestamp();
>
> // 签名方法为固定值
> $signType = Hash::ALGO_HMAC_SHA256;
> $input = [
>   'mch_id' => $mchId,
>   'service_id' => $serviceId,
>   'out_order_no' => \urlencode($outOrderNo),
>   'timestamp' => $timeStamp,
>   'nonce_str' => $nonceStr,
>   'sign_type' => $signType
> ];
> $input['sign'] = Hash::sign($signType, $input, $key); // [!code hl]
>
> $data = [
>   'businessType' => 'wxpayScoreDetail',
>   'queryString' => Query::build($input)
> ];
>
> echo \json_encode($data);
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_24.shtml)

> [!TIP] 微信小程序 唤起微信支付分小程序订单详情场景
> ```php
> use WeChatPay\Formatter;
> use WeChatPay\Crypto\Hash;
> use GuzzleHttp\Psr7\Query;
>
> $nonceStr = Formatter::nonce();
> $timeStamp = (string) Formatter::timestamp();
>
> // 签名方法为固定值
> $signType = Hash::ALGO_HMAC_SHA256;
> $input = [
>   'mch_id' => $mchId,
>   'service_id' => $serviceId,
>   'out_order_no' => $outOrderNo,
>   'timestamp' => $timeStamp,
>   'nonce_str' => $nonceStr,
>   'sign_type' => $signType
> ];
> $input['sign'] = Hash::sign($signType, $input, $key); // [!code hl]
>
> $data = [
>   'businessType' => 'wxpayScoreDetail',
>   'extraData' => $input
> ];
>
> echo \json_encode($data);
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_25.shtml)

## 非对称算法 {#asymmetric}

此种签名方法，[官方文档介绍](https://pay.weixin.qq.com/docs/merchant/development/interface-rules/signature-generation.html) 已经很明晰，这里不再细述规则，仅做实现介绍如下：

### 后台数据交换 {#asymmetric.backend}

> [!TIP] 请求数据签名，用本开发包如下：
> ```php
> use WeChatPay\Formatter;
> use WeChatPay\Crypto\Rsa;
>
> /** @var string 'GET'|'POST'|'PUT'|'PATCH'|'DELETE' */
> $httpMethod;
> /** @var string */
> $pathname;
> /** @var string */
> $body;
> /** @var \OpenSSLAsymmetricKey|resource|string 商户API私钥实例 */
> $merchantPrivateKeyInstance;
>
> Rsa::sign(
>   Formatter::request(
>      $httpMethod,
>      $pathname,
>      (string) Formatter::timestamp(),
>      Formatter::nonce(),
>      $body
>   ),
>   $merchantPrivateKeyInstance
> );
> ```

> [!TIP] 返回值数据验签，用本开发包如下：
> ```php
> /** @var string 请求返回的头'wechatpay-serial'值 */
> $serial;
> /** @var string 请求返回的头'wechatpay-timestamp'值 */
> $timestamp;
> /** @var string 请求返回的头'wechatpay-nonce'值 */
> $nonce;
> /** @var string 请求返回的头'wechatpay-signature'值 */
> $signature;
> /** @var string 请求返回的body */
> $body;
> /** @var array 微信支付平台证书/平台公钥键值对 */
> $platformPublickKeyMap;
>
> Rsa::verify(
>   Formatter::response(
>      $timestamp,
>      $nonce,
>      $body
>   ),
>   $signature,
>   $platformPublickKeyMap[$serial]
> );
> ```

### 前台数据交换 {#asymmetric.frontend}

> [!TIP] JSAPI 唤起微信支付收银台场景
> ```php
> use WeChatPay\Formatter;
> use WeChatPay\Crypto\Rsa;
>
> /** @var \OpenSSLAsymmetricKey|resource|string 商户API私钥实例 */
> $merchantPrivateKeyInstance;
>
> $nonceStr = Formatter::nonce();
> $timeStamp = (string) Formatter::timestamp();
> $package = 'prepay_id=' . $prepayId;
> $data = [
>   'appId' => $appId,
>   'timeStamp' => $timeStamp,
>   'nonceStr' => $nonceStr,
>   'package' => $package,
>   'signType' => 'RSA',
>   'paySign' => Rsa::sign( // [!code hl:4]
>     Formatter::joinedByLineFeed($appId, $timeStamp, $nonceStr, $package),
>     $merchantPrivateKeyInstance
>   )
> ];
>
> echo \json_encode($data);
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_4.shtml)

> [!TIP] APP 唤起微信支付收银台场景
> ```php
> use WeChatPay\Formatter;
> use WeChatPay\Crypto\Rsa;
>
> /** @var \OpenSSLAsymmetricKey|resource|string 商户API私钥实例 */
> $merchantPrivateKeyInstance;
>
> $noncestr = Formatter::nonce();
> $timestamp = (string) Formatter::timestamp();
> $data = {
>   'appid' => $appId,
>   'partnerid' => $mchId,
>   'prepayid' => $prepayId,
>   'package' => 'Sign=WXPay',
>   'timestamp' => $timestamp,
>   'noncestr' => $noncestr,
>   'sign' => Rsa::sign( // [!code hl:4]
>     Formatter::joinedByLineFeed($appId, $timestamp, $noncestr, $prepayid),
>     $merchantPrivateKeyInstance
>   )
> };
>
> echo \json_encode($data);
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_2_4.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter4_2_4.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter5_1_6.shtml)
