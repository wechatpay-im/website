---
title: 查询子商户强化尽调单信息
description: 查询子商户强化尽调单信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| due_diligence_id {data-required} | string | 尽调单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->mchOperationManage->enhancedDueDiligence->_due_diligence_id_->getAsync([
  'due_diligence_id' => '123000110_2_2190381dakdajois1283i12jo',
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
$instance->chain('v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id}')->getAsync([
  'due_diligence_id' => '123000110_2_2190381dakdajois1283i12jo',
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
$instance['v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id}']->getAsync([
  'due_diligence_id' => '123000110_2_2190381dakdajois1283i12jo',
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
$response = $instance->v3->mchOperationManage->enhancedDueDiligence->_due_diligence_id_->get([
  'due_diligence_id' => '123000110_2_2190381dakdajois1283i12jo',
  'query' => [
    'sub_mchid' => '123000110',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id}')->get([
  'due_diligence_id' => '123000110_2_2190381dakdajois1283i12jo',
  'query' => [
    'sub_mchid' => '123000110',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id}']->get([
  'due_diligence_id' => '123000110_2_2190381dakdajois1283i12jo',
  'query' => [
    'sub_mchid' => '123000110',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| due_diligence_id {data-required} | string | 尽调单号
| sub_mchid {data-required} | string | 子商户号
| due_diligence_state {data-required} | string | 尽调单状态<br/>`DUE_DILIGENCE_STATE_COLLECTING` \| `DUE_DILIGENCE_STATE_AUDITING` \| `DUE_DILIGENCE_STATE_REJECTED` \| `DUE_DILIGENCE_STATE_EXPIRED` \| `DUE_DILIGENCE_STATE_CANCELLED` \| `DUE_DILIGENCE_STATE_FINISHED` 枚举值之一
| reject_reason | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 驳回原因
| {colspan=3 .im-table-line}
| audit_detail_by_item {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 审核原因集合
| audit_result {data-indent=2} | number | 审核结果
| item_id {data-indent=2} | number | 审核的资料项ID
| reject_reason_to_merchant {data-indent=2} | string | 展示给商户的审核结果
| deadline_time {data-required} | string | 截止时间
| terminal_time | string | 终止时间
| submit_time | string | 提交时间
| reject_time | string | 驳回时间
| complete_time | string | 完成时间
| submission_template | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 尽调要求提交的资料
| {colspan=3 .im-table-line}
| record_fields {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 资料项集合
| check_rule {data-indent=2} | object {data-tooltip="对应PHP的array"} | 校验规则
| min_length {data-indent=3} | number | 字符串最小长度
| max_length {data-indent=3} | number | 字符串最大长度
| enum_file_exts {data-indent=3} | string[] | 限制提交的文件后缀<br/>`png` \| `jpg` \| `jpeg` 枚举值之一
| max_file_size {data-indent=3} | number | 限制文件提交大小，单位M
| enum_keys {data-indent=3} | number[] | 枚举可选的字段枚举值
| enum_values {data-indent=3} | string[] | 展示给商户看的枚举可选的字段列表
| disabled {data-indent=2} | number | 是否允许修改内容<br/>`0` \| `1` 枚举值之一
| field_data {data-indent=2} | string | 资料项值(单值类型)
| field_name {data-indent=2} | string | 资料项英文名
| hidden {data-indent=2} | number | 是否隐藏资料项
| item_id {data-indent=2} | string | 资料项ID
| name {data-indent=2} | string | 资料项中文名
| need_encrypt {data-indent=2} | boolean | 提交内容需要加密
| placeholder {data-indent=2} | string | 输入占位文案
| required {data-indent=2} | number | 是否必填<br/>`0` \| `1` 枚举值之一
| tips {data-indent=2} | string | 资料项填写提示
| tooltip {data-indent=2} | string | 叹号悬浮提示语
| type {data-indent=2} | number | 资料项类型<br/>`1` \| `2` \| `11` \| `15` 枚举值之一
| use_permanently_date {data-indent=2} | number | 日期类型是否可勾选“长期有效”<br/>`0` \| `1` 枚举值之一
| submission_data | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 尽调已经提交的资料
| {colspan=3 .im-table-line}
| record_fields {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 资料项集合
| item_id {data-indent=2} | string | 资料项ID
| field_name {data-indent=2} | string | 资料项英文名
| name {data-indent=2} | string | 资料项中文名
| type {data-indent=2} | number | 资料项类型<br/>`1` \| `2` \| `11` \| `15` 枚举值之一
| tips {data-indent=2} | string | 资料项填写提示
| placeholder {data-indent=2} | string | 输入框占位文案
| tooltip {data-indent=2} | string | 叹号悬浮提示语
| required {data-indent=2} | number | 是否必须提交<br/>`0` \| `1` 枚举值之一
| check_rule {data-indent=2} | object {data-tooltip="对应PHP的array"} | 校验规则
| min_length {data-indent=3} | number | 字符串最小长度
| max_length {data-indent=3} | number | 字符串最大长度
| enum_file_exts {data-indent=3} | string[] | 限制提交的文件后缀<br/>`png` \| `jpg` \| `jpeg` 枚举值之一
| max_file_size {data-indent=3} | number | 限制文件提交大小，单位M
| enum_keys {data-indent=3} | number[] | 枚举可选的字段枚举值
| enum_values {data-indent=3} | string[] | 展示给商户看的枚举可选的字段列表
| relations {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 资料项关联规则集合<br/>(不同资料项ID取交集*且*，相同资料项ID不同资料项值取并集*或*)
| source_key {data-indent=3} | number | 关联的资料项ID
| source_value {data-indent=3} | string | 关联的资料项值
| need_encrypt {data-indent=2} | boolean | 提交内容需要加密

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015631048)
