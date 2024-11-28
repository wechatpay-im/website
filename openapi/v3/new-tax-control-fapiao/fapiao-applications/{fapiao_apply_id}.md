---
title: 查询电子发票
description: 商户调用【开具电子发票】接口或【冲红电子发票】接口或【将电子发票插入微信用户卡包】接口成功后，应调用本接口查询电子发票开具/冲红/插卡结果，并获取已开具/冲红/插卡的电子发票信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| fapiao_apply_id {data-required} | string | 发票申请单号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户号
| fapiao_id {data-indent=1} | string | 商户发票单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->fapiaoApplications->_fapiao_apply_id_->getAsync([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_id' => '20200701123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}')->getAsync([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_id' => '20200701123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}']->getAsync([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_id' => '20200701123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->fapiaoApplications->_fapiao_apply_id_->get([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_id' => '20200701123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}')->get([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_id' => '20200701123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}']->get([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_id' => '20200701123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 发票数量
| fapiao_information {data-required} | object[] {data-tooltip="对应PHP的array"} | 发票信息
| fapiao_id {data-required data-indent=1} | string | 商户发票单号
| status {data-required data-indent=1} | string | 发票状态
| blue_fapiao {data-indent=1} | object {data-tooltip="对应PHP的array"} | 蓝字发票信息
| fapiao_code {data-required data-indent=2} | string | 发票代码
| fapiao_number {data-required data-indent=2} | string | 发票号码
| check_code {data-required data-indent=2} | string | 校验码
| password {data-required data-indent=2} | string | 密码
| fapiao_time {data-required data-indent=2} | string | 开票时间
| red_fapiao {data-indent=1} | object {data-tooltip="对应PHP的array"} | 红字发票信息
| fapiao_code {data-required data-indent=2} | string | 发票代码
| fapiao_number {data-required data-indent=2} | string | 发票号码
| check_code {data-required data-indent=2} | string | 校验码
| password {data-required data-indent=2} | string | 密码
| fapiao_time {data-required data-indent=2} | string | 开票时间
| card_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 电子发票插卡信息
| card_appid {data-required data-indent=2} | string | 插卡公众号AppID
| card_openid {data-required data-indent=2} | string | 用户在插卡公众号下的OpenID
| card_id {data-indent=2} | string | 电子发票卡券模板ID
| card_code {data-indent=2} | string | 电子发票在卡包中的编码
| card_status {data-required data-indent=2} | string | 发票卡券状态
| total_amount {data-required data-indent=1} | integer | 总价税合计
| tax_amount {data-required data-indent=1} | integer | 总税额
| amount {data-required data-indent=1} | integer | 总金额
| seller_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 销售方信息
| name {data-required data-indent=2} | string | 名称
| taxpayer_id {data-required data-indent=2} | string | 纳税人识别号
| address {data-required data-indent=2} | string | 地址
| telephone {data-indent=2} | string | 电话
| bank_name {data-indent=2} | string | 开户银行
| bank_account {data-indent=2} | string | 银行账号
| buyer_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 购买方信息
| type {data-required data-indent=2} | string | 购买方类型
| name {data-required data-indent=2} | string | 名称
| taxpayer_id {data-indent=2} | string | 纳税人识别号
| address {data-indent=2} | string | 地址
| telephone {data-indent=2} | string | 电话
| bank_name {data-indent=2} | string | 开户银行
| bank_account {data-indent=2} | string | 银行账号
| phone {data-indent=2} | string | 手机号
| email {data-indent=2} | string | 邮箱地址
| extra_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 附加信息
| payee {data-indent=2} | string | 收款人
| reviewer {data-indent=2} | string | 复核人
| drawer {data-required data-indent=2} | string | 开票人
| items {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 发票行信息
| tax_code {data-required data-indent=2} | string | 货物或应税劳务、服务编码
| goods_name {data-required data-indent=2} | string | 货物或应税劳务、服务名称
| specification {data-indent=2} | string | 规格型号
| unit {data-indent=2} | string | 单位
| quantity {data-required data-indent=2} | integer | 数量
| unit_price {data-required data-indent=2} | integer | 单价
| amount {data-required data-indent=2} | integer | 单行金额
| tax_amount {data-required data-indent=2} | integer | 单行税额
| total_amount {data-required data-indent=2} | integer | 单行金额合计
| tax_rate {data-required data-indent=2} | integer | 税率
| tax_prefer_mark {data-required data-indent=2} | string | 税收优惠政策标识
| discount {data-required data-indent=2} | boolean | 是否折扣行
| remark {data-indent=1} | string | 备注信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter4_8_9.shtml)
