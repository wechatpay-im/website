---
title: 教育通扣款受理
description: 扣款受理接口，支付结果以回调为准，或者超时以后主动查单
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 服务商APPID
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户APPID
| body {data-required data-indent=1} | string | 商品或支付单简要描述
| attach {data-indent=1} | string | 商户数据
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| goods_tag {data-indent=1} | string | 商品标记
| notify_url {data-required data-indent=1} | string | 支付回调通知地址
| contract_id {data-required data-indent=1} | string | 签约协议号
| trade_scene {data-required data-indent=1} | string | 场景信息枚举
| amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-required data-indent=2} | integer | 总金额
| currency {data-indent=2} | string | 货币类型
| device_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 设备信息
| device_id {data-indent=2} | string | 设备号
| device_ip {data-required data-indent=2} | string | 商户端设备ip

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduPapay->transactions->postAsync([
  'json' => [
    'appid'              => 'wx8888888888888888',
    'sub_mchid'          => '1900000109',
    'sub_appid'          => 'wx8888888888888888',
    'body'               => '新东方-语文课程',
    'attach'             => '自定义数据',
    'out_trade_no'       => '121775250124070332',
    'goods_tag'          => 'test',
    'notify_url'         => 'https://www.weixin.qq.com/wxpay/pay',
    'contract_id'        => 'wx998877665544wx',
    'trade_scene'        => 'EDUCATION_PERIOD',
    'amount'             => [
      'total'    => 888,
      'currency' => 'CNY',
    ],
    'device_information' => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/edu-papay/transactions')->postAsync([
  'json' => [
    'appid'              => 'wx8888888888888888',
    'sub_mchid'          => '1900000109',
    'sub_appid'          => 'wx8888888888888888',
    'body'               => '新东方-语文课程',
    'attach'             => '自定义数据',
    'out_trade_no'       => '121775250124070332',
    'goods_tag'          => 'test',
    'notify_url'         => 'https://www.weixin.qq.com/wxpay/pay',
    'contract_id'        => 'wx998877665544wx',
    'trade_scene'        => 'EDUCATION_PERIOD',
    'amount'             => [
      'total'    => 888,
      'currency' => 'CNY',
    ],
    'device_information' => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/edu-papay/transactions']->postAsync([
  'json' => [
    'appid'              => 'wx8888888888888888',
    'sub_mchid'          => '1900000109',
    'sub_appid'          => 'wx8888888888888888',
    'body'               => '新东方-语文课程',
    'attach'             => '自定义数据',
    'out_trade_no'       => '121775250124070332',
    'goods_tag'          => 'test',
    'notify_url'         => 'https://www.weixin.qq.com/wxpay/pay',
    'contract_id'        => 'wx998877665544wx',
    'trade_scene'        => 'EDUCATION_PERIOD',
    'amount'             => [
      'total'    => 888,
      'currency' => 'CNY',
    ],
    'device_information' => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduPapay->transactions->post([
  'json' => [
    'appid'              => 'wx8888888888888888',
    'sub_mchid'          => '1900000109',
    'sub_appid'          => 'wx8888888888888888',
    'body'               => '新东方-语文课程',
    'attach'             => '自定义数据',
    'out_trade_no'       => '121775250124070332',
    'goods_tag'          => 'test',
    'notify_url'         => 'https://www.weixin.qq.com/wxpay/pay',
    'contract_id'        => 'wx998877665544wx',
    'trade_scene'        => 'EDUCATION_PERIOD',
    'amount'             => [
      'total'    => 888,
      'currency' => 'CNY',
    ],
    'device_information' => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/edu-papay/transactions')->post([
  'json' => [
    'appid'              => 'wx8888888888888888',
    'sub_mchid'          => '1900000109',
    'sub_appid'          => 'wx8888888888888888',
    'body'               => '新东方-语文课程',
    'attach'             => '自定义数据',
    'out_trade_no'       => '121775250124070332',
    'goods_tag'          => 'test',
    'notify_url'         => 'https://www.weixin.qq.com/wxpay/pay',
    'contract_id'        => 'wx998877665544wx',
    'trade_scene'        => 'EDUCATION_PERIOD',
    'amount'             => [
      'total'    => 888,
      'currency' => 'CNY',
    ],
    'device_information' => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/edu-papay/transactions']->post([
  'json' => [
    'appid'              => 'wx8888888888888888',
    'sub_mchid'          => '1900000109',
    'sub_appid'          => 'wx8888888888888888',
    'body'               => '新东方-语文课程',
    'attach'             => '自定义数据',
    'out_trade_no'       => '121775250124070332',
    'goods_tag'          => 'test',
    'notify_url'         => 'https://www.weixin.qq.com/wxpay/pay',
    'contract_id'        => 'wx998877665544wx',
    'trade_scene'        => 'EDUCATION_PERIOD',
    'amount'             => [
      'total'    => 888,
      'currency' => 'CNY',
    ],
    'device_information' => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_7.shtml)
