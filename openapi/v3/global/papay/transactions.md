---
title: 支付扣款
description: 可应用于定期扣款或需事后扣款以期提高效率的场景。例如：水电煤缴费、话费、充电宝租借等场景。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 机构APPID
| sp_appid {data-indent=1} | string | 机构appid
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| description {data-indent=1} | string | 商品描述
| attach {data-indent=1} | string | 商户数据
| notify_url {data-indent=1} | string | 通知地址
| out_trade_no {data-indent=1} | string | 商户订单号
| goods_tag {data-indent=1} | string | 商品标记
| merchant_category_code {data-indent=1} | string | MCC码
| contract_id {data-indent=1} | string | 委托代扣协议ID
| amount {data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-required data-indent=2} | integer | 总金额
| currency {data-indent=2} | string | 货币类型
| scene_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 场景信息
| device_id {data-indent=2} | string | 商户端设备号
| device_ip {data-indent=2} | string | 商户端设备IP

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->papay->transactions->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'sp_appid' => 'wx8888888888888888',
    'sub_mchid' => '1230000109',
    'sub_appid' => 'wxcbda96de0b165484',
    'description' => 'image形象店-深圳腾大- QQ公仔',
    'attach' => '自定义数据',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no' => '1217752501201407033233368018',
    'goods_tag' => 'WXG',
    'merchant_category_code' => '1011',
    'contract_id' => '100005698',
    'amount' => [
      'total' => 888,
      'currency' => 'HKD',
    ],
    'scene_info' => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/papay/transactions')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'sp_appid' => 'wx8888888888888888',
    'sub_mchid' => '1230000109',
    'sub_appid' => 'wxcbda96de0b165484',
    'description' => 'image形象店-深圳腾大- QQ公仔',
    'attach' => '自定义数据',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no' => '1217752501201407033233368018',
    'goods_tag' => 'WXG',
    'merchant_category_code' => '1011',
    'contract_id' => '100005698',
    'amount' => [
      'total' => 888,
      'currency' => 'HKD',
    ],
    'scene_info' => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/papay/transactions']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'sp_appid' => 'wx8888888888888888',
    'sub_mchid' => '1230000109',
    'sub_appid' => 'wxcbda96de0b165484',
    'description' => 'image形象店-深圳腾大- QQ公仔',
    'attach' => '自定义数据',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no' => '1217752501201407033233368018',
    'goods_tag' => 'WXG',
    'merchant_category_code' => '1011',
    'contract_id' => '100005698',
    'amount' => [
      'total' => 888,
      'currency' => 'HKD',
    ],
    'scene_info' => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->papay->transactions->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'sp_appid' => 'wx8888888888888888',
    'sub_mchid' => '1230000109',
    'sub_appid' => 'wxcbda96de0b165484',
    'description' => 'image形象店-深圳腾大- QQ公仔',
    'attach' => '自定义数据',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no' => '1217752501201407033233368018',
    'goods_tag' => 'WXG',
    'merchant_category_code' => '1011',
    'contract_id' => '100005698',
    'amount' => [
      'total' => 888,
      'currency' => 'HKD',
    ],
    'scene_info' => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/papay/transactions')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'sp_appid' => 'wx8888888888888888',
    'sub_mchid' => '1230000109',
    'sub_appid' => 'wxcbda96de0b165484',
    'description' => 'image形象店-深圳腾大- QQ公仔',
    'attach' => '自定义数据',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no' => '1217752501201407033233368018',
    'goods_tag' => 'WXG',
    'merchant_category_code' => '1011',
    'contract_id' => '100005698',
    'amount' => [
      'total' => 888,
      'currency' => 'HKD',
    ],
    'scene_info' => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/papay/transactions']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'sp_appid' => 'wx8888888888888888',
    'sub_mchid' => '1230000109',
    'sub_appid' => 'wxcbda96de0b165484',
    'description' => 'image形象店-深圳腾大- QQ公仔',
    'attach' => '自定义数据',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no' => '1217752501201407033233368018',
    'goods_tag' => 'WXG',
    'merchant_category_code' => '1011',
    'contract_id' => '100005698',
    'amount' => [
      'total' => 888,
      'currency' => 'HKD',
    ],
    'scene_info' => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter5_1_6.shtml)
