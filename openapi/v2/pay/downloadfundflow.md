---
title: 下载资金账单
description: 商户可以通过该接口下载自2017年6月1日起 的历史资金流水账单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>固定枚举值`HMAC-SHA256`
| bill_date {data-required data-indent=1} | string | 资金账单日期
| account_type {data-required data-indent=1} | string | 资金账户类型<br/>`Basic` \| `Operation` \| `Fees` 枚举值之一
| tar_type {data-indent=1} | string | 压缩账单<br/>`GZIP` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->downloadfundflow->postAsync([
  'sink' => './somehowfile.csv.gz',
  'security' => true,
  'xml' => [
    'appid'        => 'wx8888888888888888',
    'mch_id'       => '1900000109',
    'sign_type'    => 'HMAC-SHA256',
    'bill_date'    => '20140603',
    'account_type' => 'Basic',
    'tar_type'     => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  $tmp = $response->getBody();
  $tmp->tell() && $tmp->rewind();
  $firstFiveBytes = $tmp->read(5);
  if ('<xml>' === $firstFiveBytes) {
    print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
  }
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/downloadfundflow')->postAsync([
  'sink' => './somehowfile.csv.gz',
  'security' => true,
  'xml' => [
    'appid'        => 'wx8888888888888888',
    'mch_id'       => '1900000109',
    'sign_type'    => 'HMAC-SHA256',
    'bill_date'    => '20140603',
    'account_type' => 'Basic',
    'tar_type'     => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  $tmp = $response->getBody();
  $tmp->tell() && $tmp->rewind();
  $firstFiveBytes = $tmp->read(5);
  if ('<xml>' === $firstFiveBytes) {
    print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
  }
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/downloadfundflow']->postAsync([
  'sink' => './somehowfile.csv.gz',
  'security' => true,
  'xml' => [
    'appid'        => 'wx8888888888888888',
    'mch_id'       => '1900000109',
    'sign_type'    => 'HMAC-SHA256',
    'bill_date'    => '20140603',
    'account_type' => 'Basic',
    'tar_type'     => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  $tmp = $response->getBody();
  $tmp->tell() && $tmp->rewind();
  $firstFiveBytes = $tmp->read(5);
  if ('<xml>' === $firstFiveBytes) {
    print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
  }
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->downloadfundflow->post([
  'sink' => './somehowfile.csv.gz',
  'security' => true,
  'xml' => [
    'appid'        => 'wx8888888888888888',
    'mch_id'       => '1900000109',
    'sign_type'    => 'HMAC-SHA256',
    'bill_date'    => '20140603',
    'account_type' => 'Basic',
    'tar_type'     => 'GZIP',
  ],
]);

$tmp = $response->getBody();
$tmp->tell() && $tmp->rewind();
$firstFiveBytes = $tmp->read(5);
if ('<xml>' === $firstFiveBytes) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
}
```

```php [同步声明式]
$response = $instance->chain('v2/pay/downloadfundflow')->post([
  'sink' => './somehowfile.csv.gz',
  'security' => true,
  'xml' => [
    'appid'        => 'wx8888888888888888',
    'mch_id'       => '1900000109',
    'sign_type'    => 'HMAC-SHA256',
    'bill_date'    => '20140603',
    'account_type' => 'Basic',
    'tar_type'     => 'GZIP',
  ],
]);

$tmp = $response->getBody();
$tmp->tell() && $tmp->rewind();
$firstFiveBytes = $tmp->read(5);
if ('<xml>' === $firstFiveBytes) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
}
```

```php [同步属性式]
$response = $instance['v2/pay/downloadfundflow']->post([
  'sink' => './somehowfile.csv.gz',
  'security' => true,
  'xml' => [
    'appid'        => 'wx8888888888888888',
    'mch_id'       => '1900000109',
    'sign_type'    => 'HMAC-SHA256',
    'bill_date'    => '20140603',
    'account_type' => 'Basic',
    'tar_type'     => 'GZIP',
  ],
]);

$tmp = $response->getBody();
$tmp->tell() && $tmp->rewind();
$firstFiveBytes = $tmp->read(5);
if ('<xml>' === $firstFiveBytes) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
}
```

:::

| 异常字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| result_code | string | 业务结果<br/>`FAIL` 枚举值
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述

{.im-table #response}

参阅
- [官方付款码文档](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_18&index=7)
- [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_18&index=7)
- [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_18&index=7)
- [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_18&index=9)
- [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_18&index=7)
- [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_18&index=7)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011939779)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011935220)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011937075)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011939788)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011937603)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011941526)
- [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4012181559)
