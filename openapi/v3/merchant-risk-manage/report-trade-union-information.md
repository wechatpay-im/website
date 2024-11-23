---
title: 上报订单关联信息
description: 从业机构/服务商/渠道商/商户可调用该接口，在商户订单下单完成后，上报订单关联信息，以便后续在支付环节进行风险管控
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-indent=1} | string | 微信支付分配的服务商唯一标识
| acquiring_bank_id {data-indent=1} | string | 微信支付分配的从业机构唯一标识
| channel_id {data-indent=1} | string | 微信支付分配的渠道商唯一标识
| sub_mchid {data-indent=1} | string | 上报订单风险数据的商户号信息
| out_trade_no {data-indent=1} | string | 商户系统内部订单号，只能是数字、大小写字母_-*且在同一个商户号下唯一
| openid {data-indent=1} | string | 此参数为微信用户在商户对应appid下的唯一标识
| phone {data-indent=1} | string | 用户在商户侧留存的手机号，采用商户平台证书sm2公钥加密传递
| certificates_number {data-indent=1} | string | 身份证ID后6位，采用商户平台证书sm2公钥加密传递
| client_ip {data-indent=1} | string | 用户的终端IP
| risk_level {data-indent=1} | integer | 商户判定交易的风险等级
| line_type {data-indent=1} | integer | 1：线上交易; 2：线下交易
| goods_type {data-indent=1} | integer | 1：虚拟交易；2：实物交易
| seller_type {data-indent=1} | integer | 物品发布类型
| is_need_deliver {data-indent=1} | boolean | 是否需要物流发货
| device_type {data-indent=1} | integer | 用户设备类型
| userid {data-indent=1} | string | 出金的用户在商户侧的账号，由商户侧定义，保证账号维度唯一即可
| phone_from {data-indent=1} | integer | 用户手机号的来源方式
| seller_userid {data-indent=1} | string | 收款方在商户侧的用户标识，由商户侧定义，账号维度唯一即可
| scene {data-indent=1} | integer | 0：无明确场景；1：充值；2：生活缴费
| recharge_fields {data-indent=1} | object {data-tooltip="对应PHP的array"} | 
| account_type {data-indent=2} | integer | 充值场景，用户充值的账号类型
| account {data-indent=2} | string | 
| living_expenses_fields {data-indent=1} | object {data-tooltip="对应PHP的array"} | 
| acc_no {data-indent=2} | string | 生活缴费的呼号
| type {data-indent=2} | integer | 缴费的种类
| city {data-indent=2} | string | 用户缴费户号所属城市
| address {data-indent=2} | string | 用户缴费户号所对应的地址信息
| acc_name {data-indent=2} | string | 缴费户号对应的户主名字
| company_name {data-indent=2} | string | 给哪个机构缴纳该笔费用
| amount {data-indent=2} | integer | 缴费金额，单位为分，币种为人名币
| extra_fields1 {data-indent=1} | string | 扩展字段1，json格式
| extra_fields2 {data-indent=1} | string | 扩展字段2，json格式
| extra_fields3 {data-indent=1} | string | 扩展字段3，json格式
| headers | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantRiskManage->reportTradeUnionInformation->postAsync([
  'json' => [
    'sp_mchid' => '1900000109',
    'acquiring_bank_id' => '1356485',
    'channel_id' => '1900000108',
    'sub_mchid' => '1900009231',
    'out_trade_no' => '1217752501201407033233368018',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'phone' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'certificates_number' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'client_ip' => '123.12.12.123',
    'risk_level' => 1,
    'line_type' => 1,
    'goods_type' => 1,
    'seller_type' => 1,
    'is_need_deliver' => true,
    'device_type' => 1,
    'userid' => '华为的账号：260XXX',
    'phone_from' => 1,
    'seller_userid' => '抖音的账号：XXXXX',
    'scene' => 1,
    'recharge_fields' => [
      'account_type' => 1,
      'account' => 'example_account',
    ],
    'living_expenses_fields' => [
      'acc_no' => '123456',
      'type' => 1,
      'city' => '湖南衡阳',
      'address' => '广东省深圳市南山区海天二路33号',
      'acc_name' => '詹讯',
      'company_name' => '深圳电力',
      'amount' => 500,
    ],
    'extra_fields1' => '{"key1":"value1"}',
    'extra_fields2' => '{"key1":"value1"}',
    'extra_fields3' => '{"key1":"value1"}',
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
    'sp_mchid' => '1900000109',
    'acquiring_bank_id' => '1356485',
    'channel_id' => '1900000108',
    'sub_mchid' => '1900009231',
    'out_trade_no' => '1217752501201407033233368018',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'phone' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'certificates_number' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'client_ip' => '123.12.12.123',
    'risk_level' => 1,
    'line_type' => 1,
    'goods_type' => 1,
    'seller_type' => 1,
    'is_need_deliver' => true,
    'device_type' => 1,
    'userid' => '华为的账号：260XXX',
    'phone_from' => 1,
    'seller_userid' => '抖音的账号：XXXXX',
    'scene' => 1,
    'recharge_fields' => [
      'account_type' => 1,
      'account' => 'example_account',
    ],
    'living_expenses_fields' => [
      'acc_no' => '123456',
      'type' => 1,
      'city' => '湖南衡阳',
      'address' => '广东省深圳市南山区海天二路33号',
      'acc_name' => '詹讯',
      'company_name' => '深圳电力',
      'amount' => 500,
    ],
    'extra_fields1' => '{"key1":"value1"}',
    'extra_fields2' => '{"key1":"value1"}',
    'extra_fields3' => '{"key1":"value1"}',
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
    'sp_mchid' => '1900000109',
    'acquiring_bank_id' => '1356485',
    'channel_id' => '1900000108',
    'sub_mchid' => '1900009231',
    'out_trade_no' => '1217752501201407033233368018',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'phone' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'certificates_number' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'client_ip' => '123.12.12.123',
    'risk_level' => 1,
    'line_type' => 1,
    'goods_type' => 1,
    'seller_type' => 1,
    'is_need_deliver' => true,
    'device_type' => 1,
    'userid' => '华为的账号：260XXX',
    'phone_from' => 1,
    'seller_userid' => '抖音的账号：XXXXX',
    'scene' => 1,
    'recharge_fields' => [
      'account_type' => 1,
      'account' => 'example_account',
    ],
    'living_expenses_fields' => [
      'acc_no' => '123456',
      'type' => 1,
      'city' => '湖南衡阳',
      'address' => '广东省深圳市南山区海天二路33号',
      'acc_name' => '詹讯',
      'company_name' => '深圳电力',
      'amount' => 500,
    ],
    'extra_fields1' => '{"key1":"value1"}',
    'extra_fields2' => '{"key1":"value1"}',
    'extra_fields3' => '{"key1":"value1"}',
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
    'sp_mchid' => '1900000109',
    'acquiring_bank_id' => '1356485',
    'channel_id' => '1900000108',
    'sub_mchid' => '1900009231',
    'out_trade_no' => '1217752501201407033233368018',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'phone' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'certificates_number' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'client_ip' => '123.12.12.123',
    'risk_level' => 1,
    'line_type' => 1,
    'goods_type' => 1,
    'seller_type' => 1,
    'is_need_deliver' => true,
    'device_type' => 1,
    'userid' => '华为的账号：260XXX',
    'phone_from' => 1,
    'seller_userid' => '抖音的账号：XXXXX',
    'scene' => 1,
    'recharge_fields' => [
      'account_type' => 1,
      'account' => 'example_account',
    ],
    'living_expenses_fields' => [
      'acc_no' => '123456',
      'type' => 1,
      'city' => '湖南衡阳',
      'address' => '广东省深圳市南山区海天二路33号',
      'acc_name' => '詹讯',
      'company_name' => '深圳电力',
      'amount' => 500,
    ],
    'extra_fields1' => '{"key1":"value1"}',
    'extra_fields2' => '{"key1":"value1"}',
    'extra_fields3' => '{"key1":"value1"}',
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
    'sp_mchid' => '1900000109',
    'acquiring_bank_id' => '1356485',
    'channel_id' => '1900000108',
    'sub_mchid' => '1900009231',
    'out_trade_no' => '1217752501201407033233368018',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'phone' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'certificates_number' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'client_ip' => '123.12.12.123',
    'risk_level' => 1,
    'line_type' => 1,
    'goods_type' => 1,
    'seller_type' => 1,
    'is_need_deliver' => true,
    'device_type' => 1,
    'userid' => '华为的账号：260XXX',
    'phone_from' => 1,
    'seller_userid' => '抖音的账号：XXXXX',
    'scene' => 1,
    'recharge_fields' => [
      'account_type' => 1,
      'account' => 'example_account',
    ],
    'living_expenses_fields' => [
      'acc_no' => '123456',
      'type' => 1,
      'city' => '湖南衡阳',
      'address' => '广东省深圳市南山区海天二路33号',
      'acc_name' => '詹讯',
      'company_name' => '深圳电力',
      'amount' => 500,
    ],
    'extra_fields1' => '{"key1":"value1"}',
    'extra_fields2' => '{"key1":"value1"}',
    'extra_fields3' => '{"key1":"value1"}',
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
    'sp_mchid' => '1900000109',
    'acquiring_bank_id' => '1356485',
    'channel_id' => '1900000108',
    'sub_mchid' => '1900009231',
    'out_trade_no' => '1217752501201407033233368018',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'phone' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'certificates_number' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'client_ip' => '123.12.12.123',
    'risk_level' => 1,
    'line_type' => 1,
    'goods_type' => 1,
    'seller_type' => 1,
    'is_need_deliver' => true,
    'device_type' => 1,
    'userid' => '华为的账号：260XXX',
    'phone_from' => 1,
    'seller_userid' => '抖音的账号：XXXXX',
    'scene' => 1,
    'recharge_fields' => [
      'account_type' => 1,
      'account' => 'example_account',
    ],
    'living_expenses_fields' => [
      'acc_no' => '123456',
      'type' => 1,
      'city' => '湖南衡阳',
      'address' => '广东省深圳市南山区海天二路33号',
      'acc_name' => '詹讯',
      'company_name' => '深圳电力',
      'amount' => 500,
    ],
    'extra_fields1' => '{"key1":"value1"}',
    'extra_fields2' => '{"key1":"value1"}',
    'extra_fields3' => '{"key1":"value1"}',
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
| sp_mchid | string | 微信支付分配的服务商唯一标识
| acquiring_bank_id | string | 微信支付分配的从业机构唯一标识
| channel_id | string | 微信支付分配的渠道商唯一标识
| sub_mchid | string | 上报订单风险数据的商户号信息
| out_trade_no | string | 商户系统内部订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/risk-manage/trade-risk/report-trade-risk-information.html)
