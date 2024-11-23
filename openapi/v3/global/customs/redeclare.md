---
title: 报关重推
description: 如果订单附加信息已请求报送海关，但电子口岸丢单，则可以使用报关重推接口重新向海关推送（订单附加信息的state必须为SUCCESS或者EXCEPT）。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 机构APPID
| mchid {data-required data-indent=1} | string | 商户号
| out_trade_no {data-indent=1} | string | 商户订单号
| transaction_id {data-indent=1} | string | 微信订单号
| sub_order_no {data-indent=1} | string | 商户子单号
| sub_order_id {data-indent=1} | string | 微信子单号
| customs {data-required data-indent=1} | string | 海关编码
| merchant_customs_no {data-required data-indent=1} | string | 商户海关备案号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->customs->redeclare->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'out_trade_no' => '20150806125346',
    'transaction_id' => '1000320306201511078440737890',
    'sub_order_no' => '20150806125346',
    'sub_order_id' => '1000320306201511078440737891',
    'customs' => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/customs/redeclare')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'out_trade_no' => '20150806125346',
    'transaction_id' => '1000320306201511078440737890',
    'sub_order_no' => '20150806125346',
    'sub_order_id' => '1000320306201511078440737891',
    'customs' => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/customs/redeclare']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'out_trade_no' => '20150806125346',
    'transaction_id' => '1000320306201511078440737890',
    'sub_order_no' => '20150806125346',
    'sub_order_id' => '1000320306201511078440737891',
    'customs' => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->customs->redeclare->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'out_trade_no' => '20150806125346',
    'transaction_id' => '1000320306201511078440737890',
    'sub_order_no' => '20150806125346',
    'sub_order_id' => '1000320306201511078440737891',
    'customs' => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/customs/redeclare')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'out_trade_no' => '20150806125346',
    'transaction_id' => '1000320306201511078440737890',
    'sub_order_no' => '20150806125346',
    'sub_order_id' => '1000320306201511078440737891',
    'customs' => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/customs/redeclare']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'out_trade_no' => '20150806125346',
    'transaction_id' => '1000320306201511078440737890',
    'sub_order_no' => '20150806125346',
    'sub_order_id' => '1000320306201511078440737891',
    'customs' => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid {data-required}| string | 机构APPID
| mchid {data-required}| string | 商户号
| state {data-required}| string | 报关状态
| out_trade_no {data-required}| string | 商户订单号
| transaction_id {data-required}| string | 微信订单号
| sub_order_no | string | 商户子订单号
| sub_order_id | string | 微信子订单号
| modify_time {data-required}| string | 最后更新时间
| explanation | string | 申报结果说明

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_3_4.shtml)
