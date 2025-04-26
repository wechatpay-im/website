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
| phone {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 用户手机号
| certificates_number {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 用户实名证件号
| client_ip {data-indent=1} | string | 用户终端ip
| risk_level {data-indent=1} | number | 商户判定交易的风险等级
| line_type {data-indent=1} | number | 线上线下标识<br/>`1` \| `2` 枚举值之一
| goods_type {data-indent=1} | number | 虚拟实物标识<br/>`1` \| `2` 枚举值之一
| seller_type {data-indent=1} | number | 物品发布类型<br/>`1` \| `2` 枚举值之一
| is_need_deliver {data-indent=1} | boolean | 是否需要物流发货
| device_type {data-indent=1} | number | 用户设备类型<br/>`1` \| `2` \| `3` 枚举值之一
| userid {data-indent=1} | string | 付款方用户标识
| phone_from {data-indent=1} | number | 手机号来源
| seller_userid {data-indent=1} | string | 收款方用户标识
| scene {data-indent=1} | number | 业务场景<br/>`0` \| `1` \| `2` 枚举值之一
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
| high_risk_goods {data-indent=1} | number | 高风险商品标签
| same_deviced {data-indent=1} | boolean | 用户下单设备与支付设备是否一致
| reliable_device {data-indent=1} | boolean | 用户下单设备是否是常用设备
| delivery_province {data-indent=1} | string | 收货省份
| delivery_city {data-indent=1} | string | 收货城市
| new_address {data-indent=1} | boolean | 收货人地址是否新增
| last_pay_openid {data-indent=1} | string | 上一笔支付openid
| risky_goods {data-indent=1} | number | 高风险类目<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` 枚举值之一
| offline_delivery_label {data-indent=1} | number | 订单识别标识：小时购/自提等枚举值<br/>`1` \| `2` 枚举值之一
| proxy_payment {data-indent=1} | boolean | 是否为代付订单
| order_phone_number {data-indent=1} | string | 下单人手机号：手机号前3后4
| user_risk_level {data-indent=1} | number | 下单人风险等级<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` 枚举值之一
| sp_risk_level {data-indent=1} | number | 商户风险等级<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` 枚举值之一
| phone_number_location {data-indent=1} | string | 手机号所属地
| goods_category {data-indent=1} | string | 商品类目
| pre_opening_behavior {data-indent=1} | string | 前置打开行为异常
| new_store {data-indent=1} | boolean | 卖家是否是新账号
| store_identifier {data-indent=1} | string | 店铺标识
| goods_listing_time {data-indent=1} | string | 商品上架时间
| combine_out_trade_no {data-indent=1} | string | 合单商户订单号
| combine_mchid {data-indent=1} | string | 合单商户号
| sub_orders {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 子单列表
| out_trade_no {data-indent=2} | string | 子单商户订单号
| mch_id {data-indent=2} | string | 子单发起方商户号
| delivery_province {data-indent=2} | string | 收货省份
| delivery_city {data-indent=2} | string | 收货城市
| risky_goods {data-indent=2} | number | 高风险类目<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` 枚举值之一
| user_risk_level {data-indent=2} | number | 下单人风险等级<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` 枚举值之一
| sp_risk_level {data-indent=2} | number | 商户风险等级<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` 枚举值之一
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
    'high_risk_goods'        => 1,
    'same_deviced'           => true,
    'reliable_device'        => true,
    'delivery_province'      => 'example_delivery_province',
    'delivery_city'          => 'example_delivery_city',
    'new_address'            => true,
    'last_pay_openid'        => 'example_last_pay_openid',
    'risky_goods'            => 1,
    'offline_delivery_label' => 1,
    'proxy_payment'          => true,
    'order_phone_number'     => 'example_order_phone_number',
    'user_risk_level'        => 1,
    'sp_risk_level'          => 1,
    'phone_number_location'  => 'example_phone_number_location',
    'goods_category'         => 'example_goods_category',
    'pre_opening_behavior'   => 'example_pre_opening_behavior',
    'new_store'              => true,
    'store_identifier'       => 'example_store_identifier',
    'goods_listing_time'     => 'example_goods_listing_time',
    'combine_out_trade_no'   => 'example_combine_out_trade_no',
    'combine_mchid'          => 'example_combine_mchid',
    'sub_orders'             => [[
      'out_trade_no'      => 'example_out_trade_no',
      'mch_id'            => 'example_mch_id',
      'delivery_province' => 'example_delivery_province',
      'delivery_city'     => 'example_delivery_city',
      'risky_goods'       => 1,
      'user_risk_level'   => 1,
      'sp_risk_level'     => 1,
    ],],
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
    'high_risk_goods'        => 1,
    'same_deviced'           => true,
    'reliable_device'        => true,
    'delivery_province'      => 'example_delivery_province',
    'delivery_city'          => 'example_delivery_city',
    'new_address'            => true,
    'last_pay_openid'        => 'example_last_pay_openid',
    'risky_goods'            => 1,
    'offline_delivery_label' => 1,
    'proxy_payment'          => true,
    'order_phone_number'     => 'example_order_phone_number',
    'user_risk_level'        => 1,
    'sp_risk_level'          => 1,
    'phone_number_location'  => 'example_phone_number_location',
    'goods_category'         => 'example_goods_category',
    'pre_opening_behavior'   => 'example_pre_opening_behavior',
    'new_store'              => true,
    'store_identifier'       => 'example_store_identifier',
    'goods_listing_time'     => 'example_goods_listing_time',
    'combine_out_trade_no'   => 'example_combine_out_trade_no',
    'combine_mchid'          => 'example_combine_mchid',
    'sub_orders'             => [[
      'out_trade_no'      => 'example_out_trade_no',
      'mch_id'            => 'example_mch_id',
      'delivery_province' => 'example_delivery_province',
      'delivery_city'     => 'example_delivery_city',
      'risky_goods'       => 1,
      'user_risk_level'   => 1,
      'sp_risk_level'     => 1,
    ],],
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
    'high_risk_goods'        => 1,
    'same_deviced'           => true,
    'reliable_device'        => true,
    'delivery_province'      => 'example_delivery_province',
    'delivery_city'          => 'example_delivery_city',
    'new_address'            => true,
    'last_pay_openid'        => 'example_last_pay_openid',
    'risky_goods'            => 1,
    'offline_delivery_label' => 1,
    'proxy_payment'          => true,
    'order_phone_number'     => 'example_order_phone_number',
    'user_risk_level'        => 1,
    'sp_risk_level'          => 1,
    'phone_number_location'  => 'example_phone_number_location',
    'goods_category'         => 'example_goods_category',
    'pre_opening_behavior'   => 'example_pre_opening_behavior',
    'new_store'              => true,
    'store_identifier'       => 'example_store_identifier',
    'goods_listing_time'     => 'example_goods_listing_time',
    'combine_out_trade_no'   => 'example_combine_out_trade_no',
    'combine_mchid'          => 'example_combine_mchid',
    'sub_orders'             => [[
      'out_trade_no'      => 'example_out_trade_no',
      'mch_id'            => 'example_mch_id',
      'delivery_province' => 'example_delivery_province',
      'delivery_city'     => 'example_delivery_city',
      'risky_goods'       => 1,
      'user_risk_level'   => 1,
      'sp_risk_level'     => 1,
    ],],
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
    'high_risk_goods'        => 1,
    'same_deviced'           => true,
    'reliable_device'        => true,
    'delivery_province'      => 'example_delivery_province',
    'delivery_city'          => 'example_delivery_city',
    'new_address'            => true,
    'last_pay_openid'        => 'example_last_pay_openid',
    'risky_goods'            => 1,
    'offline_delivery_label' => 1,
    'proxy_payment'          => true,
    'order_phone_number'     => 'example_order_phone_number',
    'user_risk_level'        => 1,
    'sp_risk_level'          => 1,
    'phone_number_location'  => 'example_phone_number_location',
    'goods_category'         => 'example_goods_category',
    'pre_opening_behavior'   => 'example_pre_opening_behavior',
    'new_store'              => true,
    'store_identifier'       => 'example_store_identifier',
    'goods_listing_time'     => 'example_goods_listing_time',
    'combine_out_trade_no'   => 'example_combine_out_trade_no',
    'combine_mchid'          => 'example_combine_mchid',
    'sub_orders'             => [[
      'out_trade_no'      => 'example_out_trade_no',
      'mch_id'            => 'example_mch_id',
      'delivery_province' => 'example_delivery_province',
      'delivery_city'     => 'example_delivery_city',
      'risky_goods'       => 1,
      'user_risk_level'   => 1,
      'sp_risk_level'     => 1,
    ],],
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
    'high_risk_goods'        => 1,
    'same_deviced'           => true,
    'reliable_device'        => true,
    'delivery_province'      => 'example_delivery_province',
    'delivery_city'          => 'example_delivery_city',
    'new_address'            => true,
    'last_pay_openid'        => 'example_last_pay_openid',
    'risky_goods'            => 1,
    'offline_delivery_label' => 1,
    'proxy_payment'          => true,
    'order_phone_number'     => 'example_order_phone_number',
    'user_risk_level'        => 1,
    'sp_risk_level'          => 1,
    'phone_number_location'  => 'example_phone_number_location',
    'goods_category'         => 'example_goods_category',
    'pre_opening_behavior'   => 'example_pre_opening_behavior',
    'new_store'              => true,
    'store_identifier'       => 'example_store_identifier',
    'goods_listing_time'     => 'example_goods_listing_time',
    'combine_out_trade_no'   => 'example_combine_out_trade_no',
    'combine_mchid'          => 'example_combine_mchid',
    'sub_orders'             => [[
      'out_trade_no'      => 'example_out_trade_no',
      'mch_id'            => 'example_mch_id',
      'delivery_province' => 'example_delivery_province',
      'delivery_city'     => 'example_delivery_city',
      'risky_goods'       => 1,
      'user_risk_level'   => 1,
      'sp_risk_level'     => 1,
    ],],
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
    'high_risk_goods'        => 1,
    'same_deviced'           => true,
    'reliable_device'        => true,
    'delivery_province'      => 'example_delivery_province',
    'delivery_city'          => 'example_delivery_city',
    'new_address'            => true,
    'last_pay_openid'        => 'example_last_pay_openid',
    'risky_goods'            => 1,
    'offline_delivery_label' => 1,
    'proxy_payment'          => true,
    'order_phone_number'     => 'example_order_phone_number',
    'user_risk_level'        => 1,
    'sp_risk_level'          => 1,
    'phone_number_location'  => 'example_phone_number_location',
    'goods_category'         => 'example_goods_category',
    'pre_opening_behavior'   => 'example_pre_opening_behavior',
    'new_store'              => true,
    'store_identifier'       => 'example_store_identifier',
    'goods_listing_time'     => 'example_goods_listing_time',
    'combine_out_trade_no'   => 'example_combine_out_trade_no',
    'combine_mchid'          => 'example_combine_mchid',
    'sub_orders'             => [[
      'out_trade_no'      => 'example_out_trade_no',
      'mch_id'            => 'example_mch_id',
      'delivery_province' => 'example_delivery_province',
      'delivery_city'     => 'example_delivery_city',
      'risky_goods'       => 1,
      'user_risk_level'   => 1,
      'sp_risk_level'     => 1,
    ],],
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012529250) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012692160)
