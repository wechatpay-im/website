---
title: 使用医保自费混合订单号查看下单结果
description: 商户使用混合下单订单号，通过该接口主动查询订单状态，完成下一步的业务逻辑。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mix_trade_no {data-required} | string | 医保自费混合订单号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 医疗机构的商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->medIns->orders->mixTradeNo->_mix_trade_no_->getAsync([
  'mix_trade_no' => '1217752501201407033233368318',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/med-ins/orders/mix-trade-no/{mix_trade_no}')->getAsync([
  'mix_trade_no' => '1217752501201407033233368318',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/med-ins/orders/mix-trade-no/{mix_trade_no}']->getAsync([
  'mix_trade_no' => '1217752501201407033233368318',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->medIns->orders->mixTradeNo->_mix_trade_no_->get([
  'mix_trade_no' => '1217752501201407033233368318',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/med-ins/orders/mix-trade-no/{mix_trade_no}')->get([
  'mix_trade_no' => '1217752501201407033233368318',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/med-ins/orders/mix-trade-no/{mix_trade_no}']->get([
  'mix_trade_no' => '1217752501201407033233368318',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mix_trade_no {data-required} | string | 医保自费混合订单号
| mix_pay_status {data-required} | string | 医保自费混合订单支付状态<br/>`UNKNOWN_MIX_PAY_STATUS` \| `MIX_PAY_CREATED` \| `MIX_PAY_SUCCESS` \| `MIX_PAY_REFUND` \| `MIX_PAY_FAIL` 枚举值之一
| self_pay_status {data-required} | string | 混合订单中自费部分的支付状态<br/>`UNKNOWN_SELF_PAY_STATUS` \| `SELF_PAY_CREATED` \| `SELF_PAY_SUCCESS` \| `SELF_PAY_REFUND` \| `SELF_PAY_FAIL` \| `NO_SELF_PAY` 枚举值之一
| med_ins_pay_status {data-required} | string | 混合订单中自费部分的支付状态<br/>`UNKNOWN_MED_INS_PAY_STATUS` \| `MED_INS_PAY_CREATED` \| `MED_INS_PAY_SUCCESS` \| `MED_INS_PAY_REFUND` \| `MED_INS_PAY_FAIL` \| `NO_MED_INS_PAY` 枚举值之一
| paid_time | string | 订单支付时间
| passthrough_response_content | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 支付完成后医保局返回内容
| {colspan=3 .im-table-line}
| payAuthNo {data-indent=1} | string | 
| payOrdId {data-indent=1} | string | 
| setlLatlnt {data-indent=1} | string | 
| mix_pay_type {data-required} | string | 混合支付类型<br/>`UNKNOWN_MIX_PAY_TYPE` \| `CASH_ONLY` \| `INSURANCE_ONLY` \| `CASH_AND_INSURANCE` 枚举值之一
| order_type {data-required} | string | 订单类型<br/>`UNKNOWN_ORDER_TYPE` \| `REG_PAY` \| `DIAG_PAY` \| `COVID_EXAM_PAY` \| `IN_HOSP_PAY` \| `PHARMACY_PAY` \| `INSURANCE_PAY` \| `INT_REG_PAY` \| `INT_RE_DIAG_PAY` \| `INT_RX_PAY` \| `COVID_ANTIGEN_PAY` \| `MED_PAY` 枚举值之一
| appid {data-required} | string | 从业机构的公众号ID
| sub_appid | string | 医疗机构的公众号ID
| sub_mchid | string | 医疗机构的商户号
| openid | string | 用户在appid下的唯一标识
| sub_openid | string | 用户在医疗机构AppID下的唯一标识
| pay_for_relatives | boolean | 是否代亲属支付
| out_trade_no {data-required} | string | 从业机构订单号
| serial_no {data-required} | string | 医疗机构订单号
| pay_order_id | string | 医保局返回的支付单ID
| pay_auth_no | string | 医保局返回的支付授权码
| geo_location | string | 用户定位信息
| city_id {data-required} | string | 城市ID
| med_inst_name {data-required} | string | 医疗机构名称
| med_inst_no {data-required} | string | 医疗机构编码
| med_ins_order_create_time | string | 医保下单时间
| total_fee {data-required} | integer | 使用该接口下单的总金额
| med_ins_gov_fee | integer | 医保局结算后，医保统筹支付金额
| med_ins_self_fee | integer | 医保局结算后，医保个账支付金额
| med_ins_other_fee | integer | 医保局结算后，医保其他支付金额
| med_ins_cash_fee | integer | 医保局结算后，需要自费的金额
| wechat_pay_cash_fee | integer | 实际需要用户微信支付的金额
| cash_add_detail | object[] {data-tooltip="对应PHP的array"} | 现金补充列表
| cash_add_fee {data-required data-indent=1} | integer | 现金补充金额
| cash_add_type {data-required data-indent=1} | string | 现金补充类型<br/>`DEFAULT_ADD_TYPE` \| `FREIGHT` \| `OTHER_MEDICAL_EXPENSES` 枚举值之一
| cash_reduce_detail | object[] {data-tooltip="对应PHP的array"} | 现金减免列表
| cash_reduce_fee {data-required data-indent=1} | integer | 现金减免金额
| cash_reduce_type {data-required data-indent=1} | string | 现金减免类型<br/>`DEFAULT_REDUCE_TYPE` \| `HOSPITAL_REDUCE` \| `PHARMACY_DISCOUNT` \| `DISCOUNT` \| `PRE_PAYMENT` \| `DEPOSIT_DEDUCTION` 枚举值之一
| callback_url {data-required} | string | 回调通知URL
| prepay_id | string | 自费预下单ID
| passthrough_request_content | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 医疗机构透传给医保的数据
| {colspan=3 .im-table-line}
| payAuthNo {data-indent=1} | string | 
| payOrdId {data-indent=1} | string | 
| setlLatlnt {data-indent=1} | string | 
| extends | string | 扩展字段
| attach | string | 附加数据
| channel_no | string | 渠道号
| med_ins_test_env | boolean | 是否到医保局测试环境下单

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4016781479) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012503155)
