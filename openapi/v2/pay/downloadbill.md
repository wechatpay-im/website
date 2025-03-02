---
title: 下载对账单
description: 商户可以通过该接口下载历史交易清单。比如掉单、系统错误等导致商户侧和微信侧数据不一致，通过对账单核对后可校正支付状态。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| bill_date {data-required data-indent=1} | string | 对账单日期
| bill_type {data-indent=1} | string | 账单类型<br/> `ALL` \| `SUCCESS` \| `REFUND` \| `RECHARGE_REFUND` 枚举值之一
| tar_type {data-indent=1} | string | 压缩账单<br/>`GZIP` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->downloadbill->postAsync([
  'sink' => './somehowfile.csv.gz',
  'xml' => [
    'appid'     => 'wx8888888888888888',
    'mch_id'    => '1900000109',
    'bill_date' => '20140603',
    'bill_type' => 'ALL',
    'tar_type'  => 'GZIP',
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
$instance->chain('v2/pay/downloadbill')->postAsync([
  'sink' => './somehowfile.csv.gz',
  'xml' => [
    'appid'     => 'wx8888888888888888',
    'mch_id'    => '1900000109',
    'bill_date' => '20140603',
    'bill_type' => 'ALL',
    'tar_type'  => 'GZIP',
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
$instance['v2/pay/downloadbill']->postAsync([
  'sink' => './somehowfile.csv.gz',
  'xml' => [
    'appid'     => 'wx8888888888888888',
    'mch_id'    => '1900000109',
    'bill_date' => '20140603',
    'bill_type' => 'ALL',
    'tar_type'  => 'GZIP',
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
$response = $instance->v2->pay->downloadbill->post([
  'sink' => './somehowfile.csv.gz',
  'xml' => [
    'appid'     => 'wx8888888888888888',
    'mch_id'    => '1900000109',
    'bill_date' => '20140603',
    'bill_type' => 'ALL',
    'tar_type'  => 'GZIP',
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
$response = $instance->chain('v2/pay/downloadbill')->post([
  'sink' => './somehowfile.csv.gz',
  'xml' => [
    'appid'     => 'wx8888888888888888',
    'mch_id'    => '1900000109',
    'bill_date' => '20140603',
    'bill_type' => 'ALL',
    'tar_type'  => 'GZIP',
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
$response = $instance['v2/pay/downloadbill']->post([
  'sink' => './somehowfile.csv.gz',
  'xml' => [
    'appid'     => 'wx8888888888888888',
    'mch_id'    => '1900000109',
    'bill_date' => '20140603',
    'bill_type' => 'ALL',
    'tar_type'  => 'GZIP',
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
| return_code | string | 返回状态码<br/>`FAIL` 枚举值
| return_msg | string | 错误码描述
| error_code | string | 错误码

{.im-table #response}

参阅
- [官方付款码文档](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_6)
- [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_6)
- [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_6)
- [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_6&index=8)
- [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_6&index=6)
- [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_6)
- [官方人脸支付文档](https://share.weiyun.com/5dxUgCw)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011939627)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011935219)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011936993)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011939651)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011937545)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011941399)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011987833)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011985040)
- [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011985427)
- [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011941628)
- [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011936649)
- [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011989260)
- [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011983298)
- [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011941283)
- [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011984262)
- [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011989905)
- [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011988206)
- [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011988384)