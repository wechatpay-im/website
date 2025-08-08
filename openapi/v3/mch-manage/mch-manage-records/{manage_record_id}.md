---
title: 查询子商户下指定商户管理记录
description: 通过该接口可查询子商户下指定的商户管理记录
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| manage_record_id {data-required} | string | 商户管理记录ID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->mchManage->mchManageRecords->_manage_record_id_->getAsync([
  'manage_record_id' => 'M1210999900435123451697535102441',
  'query' => [
    'sub_mchid' => '123000110',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/mch-manage/mch-manage-records/{manage_record_id}')->getAsync([
  'manage_record_id' => 'M1210999900435123451697535102441',
  'query' => [
    'sub_mchid' => '123000110',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/mch-manage/mch-manage-records/{manage_record_id}']->getAsync([
  'manage_record_id' => 'M1210999900435123451697535102441',
  'query' => [
    'sub_mchid' => '123000110',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->mchManage->mchManageRecords->_manage_record_id_->get([
  'manage_record_id' => 'M1210999900435123451697535102441',
  'query' => [
    'sub_mchid' => '123000110',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/mch-manage/mch-manage-records/{manage_record_id}')->get([
  'manage_record_id' => 'M1210999900435123451697535102441',
  'query' => [
    'sub_mchid' => '123000110',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/mch-manage/mch-manage-records/{manage_record_id}']->get([
  'manage_record_id' => 'M1210999900435123451697535102441',
  'query' => [
    'sub_mchid' => '123000110',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号
| manage_record_id | string | 商户管理记录ID
| manage_record_type | string | 商户管理记录类型<br/>`FUNCTIONAL_LIMIT_RECORD` \| `INVESTIGATE_RECORD` 枚举值之一
| manage_time | string | 管控时间
| manage_reason | string | 管控原因
| limit_ability | string | 限制功能
| recover_way | string | 解除管控方式<br/>`SUBMIT_INFORMATION` \| `VERIFY_INACTIVE_MERCHANT_IDENTITY` \| `MODIFY_ORGANIZATION_INFORMATION` \| `OTHER` 枚举值之一
| allow_submit | boolean | 是否允许提交资料
| forbid_submit_reason | string | 禁止提交资料原因
| submit_start_time | string | 可提交资料开始时间
| submit_end_time | string | 可提交资料结束时间
| manage_record_state | string | 商户管理记录状态<br/>`PENDING` \| `SUBMITTED` \| `EXPIRED` \| `UNDER_REVIEW` \| `RECOVERED` \| `REJECTED` 枚举值之一
| recover_time | string | 解除管控时间
| recover_reason | string | 解除管控原因<br/>`MERCHANT_SUBMIT_RECOVER` \| `MERCHANT_OPERATE_RECOVER` \| `PLATFORM_AUTO_RECOVER` 枚举值之一
| reject_reason | string | 申诉驳回原因
| approve_time | string | 可提交资料结束时间
| requested_item_info | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 要求提交的资料
| {colspan=3 .im-table-line}
| record_fields {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 资料项集合
| item_id {data-indent=2} | string | 资料项ID
| field_name {data-indent=2} | string | 资料项英文名
| name {data-indent=2} | string | 资料项中文名
| type {data-indent=2} | number | 资料项类型<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` 枚举值之一
| repeated_field_data {data-indent=2} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 补充资料项多值`JSON`格式
| {colspan=3 .im-table-line}
| field_data {data-required data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 补充资料项
| longitude {data-indent=4} | string | 经度值
| latitude {data-indent=4} | string | 纬度值
| province {data-indent=4} | string | 省份
| city {data-indent=4} | string | 城市
| area {data-indent=4} | string | 区域
| street {data-indent=4} | string | 街道
| address {data-indent=4} | string | 详细地址
| name {data-indent=4} | string | 地址名
| wechat_order_id {data-indent=4} | string | 微信支付订单号
| merchant_order_id {data-indent=4} | string | 商户订单号
| trade_time {data-indent=4} | string | 交易时间+08:00东八区时间
| trade_money_amount {data-indent=4} | string | 交易金额
| trade_goods {data-indent=4} | string | 调单商品
| logistic_flag {data-indent=4} | number | 是否物流<br/>`0` \| `1` 枚举值之一
| evidence_img_list {data-indent=4} | string[] | 凭证图片信息
| tips {data-indent=2} | string | 资料项填写提示
| placeholder {data-indent=2} | string | 输入框占位文案
| tooltip {data-indent=2} | string | 叹号悬浮提示语
| required {data-indent=2} | number | 是否必须提交<br/>`0` \| `1` 枚举值之一
| need_encrypt {data-indent=2} | boolean | 提交内容需要加密
| string_check_rule {data-indent=2} | object {data-tooltip="对应PHP的array"} | 字符串校验规则
| min_string_length {data-indent=3} | number | 字符串最小长度
| max_string_length {data-indent=3} | number | 字符串最大长度
| validator {data-indent=3} | string | 校验规则<br/>`number` \| `phone` \| `idcard` \| `url` \| `email` 枚举值之一
| enum_check_rule {data-indent=2} | object {data-tooltip="对应PHP的array"} | 枚举校验规则
| min_list_length {data-indent=3} | number | 最小列表长度
| max_list_length {data-indent=3} | number | 最大列表长度
| enum_values {data-indent=3} | string[] | 展示给商户看的枚举可选的字段列表
| file_check_rule {data-indent=2} | object {data-tooltip="对应PHP的array"} | 文件校验规则
| min_list_length {data-indent=3} | number | 最小列表长度
| max_list_length {data-indent=3} | number | 最大列表长度
| enum_file_exts {data-indent=3} | string[] | 限制提交的文件后缀<br/>`png` \| `jpg` \| `jpeg` \| `mp4` \| `avi` \| `mov` \| `wmv` \| `pdf` \| `doc` \| `docx` \| `csv` \| `xlsx` 枚举值之一
| max_file_size {data-indent=3} | number | 限制文件提交大小，单位M
| time_interval_check_rule {data-indent=2} | object {data-tooltip="对应PHP的array"} | 时间区间校验规则
| min_list_length {data-indent=3} | number | 最小列表长度
| max_list_length {data-indent=3} | number | 最大列表长度
| order_interval_check_rule {data-indent=2} | object {data-tooltip="对应PHP的array"} | 订单类型校验规则
| min_list_length {data-indent=3} | number | 最小列表长度
| max_list_length {data-indent=3} | number | 最大列表长度
| enum_file_exts {data-indent=3} | string[] | 限制提交的文件后缀<br/>`png` \| `jpg` \| `jpeg` \| `mp4` \| `avi` \| `mov` \| `wmv` \| `pdf` \| `doc` \| `docx` \| `csv` \| `xlsx` 枚举值之一
| max_file_size {data-indent=3} | number | 限制文件提交大小，单位M
| relations {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 资料项关联规则集合<br/>(不同资料项ID取交集*且*，相同资料项ID不同资料项值取并集*或*)
| source_key {data-indent=3} | number | 关联的资料项ID
| source_value {data-indent=3} | string | 关联的资料项值

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014940383)
