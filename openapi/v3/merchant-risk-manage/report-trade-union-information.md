---
title: 上报订单关联信息
description: 从业机构/服务商/渠道商/商户可调用该接口，在商户订单下单完成后，上报订单关联信息，以便后续在支付环节进行风险管控
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-indent=1} | string | 服务商商户号
| acquiring_bank_id {data-indent=1} | string | 从业机构商户号
| channel_id {data-indent=1} | string | 渠道号
| sub_mchid {data-indent=1} | string | 子商户号
| out_trade_no {data-indent=1} | string | 商户订单号
| openid {data-indent=1} | string | 用户标识
| phone {data-indent=1} | string | 用户手机号
| certificates_number {data-indent=1} | string | 用户实名证件号
| client_ip {data-indent=1} | string | 用户终端ip
| risk_level {data-indent=1} | number | 商户判定交易的风险等级
| line_type {data-indent=1} | number | 线上线下标识
| goods_type {data-indent=1} | number | 虚拟实物标识
| seller_type {data-indent=1} | number | 物品发布类型
| is_need_deliver {data-indent=1} | boolean | 是否需要物流发货
| device_type {data-indent=1} | number | 用户设备类型
| userid {data-indent=1} | string | 付款方用户标识
| phone_from {data-indent=1} | number | 手机号来源
| seller_userid {data-indent=1} | string | 收款方用户标识
| scene {data-indent=1} | number | 业务场景
| recharge_fields {data-indent=1} | object {data-tooltip="对应PHP的array"} | 充值业务场景独有字段
| account_type {data-indent=2} | number | 充值账号类型
| account {data-indent=2} | string | 充值账号
| living_expenses_fields {data-indent=1} | object {data-tooltip="对应PHP的array"} | 生活缴费场景独有字段
| acc_no {data-indent=2} | string | 户号
| type {data-indent=2} | number | 费种
| city {data-indent=2} | string | 缴费城市
| address {data-indent=2} | string | 户号对应的地址信息
| acc_name {data-indent=2} | string | 缴费户名
| company_name {data-indent=2} | string | 机构名称
| amount {data-indent=2} | number | 缴费金额
| extra_fields1 {data-indent=1} | string | 扩展字段1，json格式
| extra_fields2 {data-indent=1} | string | 扩展字段2，json格式
| extra_fields3 {data-indent=1} | string | 扩展字段3，json格式
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantRiskManage->reportTradeUnionInformation->postAsync([
  'json' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'openid'                 => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'phone'                  => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'certificates_number'    => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'client_ip'              => '123.12.12.123',
    'risk_level'             => 1,
    'line_type'              => 1,
    'goods_type'             => 1,
    'seller_type'            => 1,
    'is_need_deliver'        => true,
    'device_type'            => 1,
    'userid'                 => '华为的账号：260XXX',
    'phone_from'             => 1,
    'seller_userid'          => '抖音的账号：XXXXX',
    'scene'                  => 1,
    'recharge_fields'        => [
      'account_type' => 1,
      'account'      => 'example_account',
    ],
    'living_expenses_fields' => [
      'acc_no'       => '123456',
      'type'         => 1,
      'city'         => '湖南衡阳',
      'address'      => '广东省深圳市南山区海天二路33号',
      'acc_name'     => '詹讯',
      'company_name' => '深圳电力',
      'amount'       => 500,
    ],
    'extra_fields1'          => '{"key1":"value1"}',
    'extra_fields2'          => '{"key1":"value1"}',
    'extra_fields3'          => '{"key1":"value1"}',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-risk-manage/report-trade-union-information')->postAsync([
  'json' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'openid'                 => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'phone'                  => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'certificates_number'    => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'client_ip'              => '123.12.12.123',
    'risk_level'             => 1,
    'line_type'              => 1,
    'goods_type'             => 1,
    'seller_type'            => 1,
    'is_need_deliver'        => true,
    'device_type'            => 1,
    'userid'                 => '华为的账号：260XXX',
    'phone_from'             => 1,
    'seller_userid'          => '抖音的账号：XXXXX',
    'scene'                  => 1,
    'recharge_fields'        => [
      'account_type' => 1,
      'account'      => 'example_account',
    ],
    'living_expenses_fields' => [
      'acc_no'       => '123456',
      'type'         => 1,
      'city'         => '湖南衡阳',
      'address'      => '广东省深圳市南山区海天二路33号',
      'acc_name'     => '詹讯',
      'company_name' => '深圳电力',
      'amount'       => 500,
    ],
    'extra_fields1'          => '{"key1":"value1"}',
    'extra_fields2'          => '{"key1":"value1"}',
    'extra_fields3'          => '{"key1":"value1"}',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-risk-manage/report-trade-union-information']->postAsync([
  'json' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'openid'                 => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'phone'                  => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'certificates_number'    => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'client_ip'              => '123.12.12.123',
    'risk_level'             => 1,
    'line_type'              => 1,
    'goods_type'             => 1,
    'seller_type'            => 1,
    'is_need_deliver'        => true,
    'device_type'            => 1,
    'userid'                 => '华为的账号：260XXX',
    'phone_from'             => 1,
    'seller_userid'          => '抖音的账号：XXXXX',
    'scene'                  => 1,
    'recharge_fields'        => [
      'account_type' => 1,
      'account'      => 'example_account',
    ],
    'living_expenses_fields' => [
      'acc_no'       => '123456',
      'type'         => 1,
      'city'         => '湖南衡阳',
      'address'      => '广东省深圳市南山区海天二路33号',
      'acc_name'     => '詹讯',
      'company_name' => '深圳电力',
      'amount'       => 500,
    ],
    'extra_fields1'          => '{"key1":"value1"}',
    'extra_fields2'          => '{"key1":"value1"}',
    'extra_fields3'          => '{"key1":"value1"}',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantRiskManage->reportTradeUnionInformation->post([
  'json' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'openid'                 => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'phone'                  => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'certificates_number'    => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'client_ip'              => '123.12.12.123',
    'risk_level'             => 1,
    'line_type'              => 1,
    'goods_type'             => 1,
    'seller_type'            => 1,
    'is_need_deliver'        => true,
    'device_type'            => 1,
    'userid'                 => '华为的账号：260XXX',
    'phone_from'             => 1,
    'seller_userid'          => '抖音的账号：XXXXX',
    'scene'                  => 1,
    'recharge_fields'        => [
      'account_type' => 1,
      'account'      => 'example_account',
    ],
    'living_expenses_fields' => [
      'acc_no'       => '123456',
      'type'         => 1,
      'city'         => '湖南衡阳',
      'address'      => '广东省深圳市南山区海天二路33号',
      'acc_name'     => '詹讯',
      'company_name' => '深圳电力',
      'amount'       => 500,
    ],
    'extra_fields1'          => '{"key1":"value1"}',
    'extra_fields2'          => '{"key1":"value1"}',
    'extra_fields3'          => '{"key1":"value1"}',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-risk-manage/report-trade-union-information')->post([
  'json' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'openid'                 => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'phone'                  => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'certificates_number'    => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'client_ip'              => '123.12.12.123',
    'risk_level'             => 1,
    'line_type'              => 1,
    'goods_type'             => 1,
    'seller_type'            => 1,
    'is_need_deliver'        => true,
    'device_type'            => 1,
    'userid'                 => '华为的账号：260XXX',
    'phone_from'             => 1,
    'seller_userid'          => '抖音的账号：XXXXX',
    'scene'                  => 1,
    'recharge_fields'        => [
      'account_type' => 1,
      'account'      => 'example_account',
    ],
    'living_expenses_fields' => [
      'acc_no'       => '123456',
      'type'         => 1,
      'city'         => '湖南衡阳',
      'address'      => '广东省深圳市南山区海天二路33号',
      'acc_name'     => '詹讯',
      'company_name' => '深圳电力',
      'amount'       => 500,
    ],
    'extra_fields1'          => '{"key1":"value1"}',
    'extra_fields2'          => '{"key1":"value1"}',
    'extra_fields3'          => '{"key1":"value1"}',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-risk-manage/report-trade-union-information']->post([
  'json' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'openid'                 => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'phone'                  => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'certificates_number'    => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'client_ip'              => '123.12.12.123',
    'risk_level'             => 1,
    'line_type'              => 1,
    'goods_type'             => 1,
    'seller_type'            => 1,
    'is_need_deliver'        => true,
    'device_type'            => 1,
    'userid'                 => '华为的账号：260XXX',
    'phone_from'             => 1,
    'seller_userid'          => '抖音的账号：XXXXX',
    'scene'                  => 1,
    'recharge_fields'        => [
      'account_type' => 1,
      'account'      => 'example_account',
    ],
    'living_expenses_fields' => [
      'acc_no'       => '123456',
      'type'         => 1,
      'city'         => '湖南衡阳',
      'address'      => '广东省深圳市南山区海天二路33号',
      'acc_name'     => '詹讯',
      'company_name' => '深圳电力',
      'amount'       => 500,
    ],
    'extra_fields1'          => '{"key1":"value1"}',
    'extra_fields2'          => '{"key1":"value1"}',
    'extra_fields3'          => '{"key1":"value1"}',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid | string | 服务商商户号
| acquiring_bank_id | string | 从业机构商户号
| channel_id | string | 渠道号
| sub_mchid | string | 子商户号
| out_trade_no | string | 商户订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/risk-manage/trade-risk/report-trade-risk-information.html)
