---
title: 分页查询子商户名下的商户管理记录
description: 通过该接口可用于分页查询子商户名下的商户管理记录
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 子商户号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| limit {data-required data-indent=1} | number | 最大资源条数
| offset {data-indent=1} | number | 请求资源起始位置
| manage_record_type {data-required data-indent=1} | string | 商户管理记录类型<br/>`FUNCTIONAL_LIMIT_RECORD` \| `INVESTIGATE_RECORD` 枚举值之一
| manage_record_state {data-indent=1} | string | 商户管理记录状态<br/>`PENDING` \| `SUBMITTED` \| `EXPIRED` \| `UNDER_REVIEW` \| `RECOVERED` \| `REJECTED` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->mchManage->mchManageRecords->subMchid->_sub_mchid_->getAsync([
  'sub_mchid' => '123000110',
  'query' => [
    'limit'               => 5,
    'offset'              => 10,
    'manage_record_type'  => 'FUNCTIONAL_LIMIT_RECORD',
    'manage_record_state' => 'PENDING',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/mch-manage/mch-manage-records/sub-mchid/{sub_mchid}')->getAsync([
  'sub_mchid' => '123000110',
  'query' => [
    'limit'               => 5,
    'offset'              => 10,
    'manage_record_type'  => 'FUNCTIONAL_LIMIT_RECORD',
    'manage_record_state' => 'PENDING',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/mch-manage/mch-manage-records/sub-mchid/{sub_mchid}']->getAsync([
  'sub_mchid' => '123000110',
  'query' => [
    'limit'               => 5,
    'offset'              => 10,
    'manage_record_type'  => 'FUNCTIONAL_LIMIT_RECORD',
    'manage_record_state' => 'PENDING',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->mchManage->mchManageRecords->subMchid->_sub_mchid_->get([
  'sub_mchid' => '123000110',
  'query' => [
    'limit'               => 5,
    'offset'              => 10,
    'manage_record_type'  => 'FUNCTIONAL_LIMIT_RECORD',
    'manage_record_state' => 'PENDING',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/mch-manage/mch-manage-records/sub-mchid/{sub_mchid}')->get([
  'sub_mchid' => '123000110',
  'query' => [
    'limit'               => 5,
    'offset'              => 10,
    'manage_record_type'  => 'FUNCTIONAL_LIMIT_RECORD',
    'manage_record_state' => 'PENDING',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/mch-manage/mch-manage-records/sub-mchid/{sub_mchid}']->get([
  'sub_mchid' => '123000110',
  'query' => [
    'limit'               => 5,
    'offset'              => 10,
    'manage_record_type'  => 'FUNCTIONAL_LIMIT_RECORD',
    'manage_record_state' => 'PENDING',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| offset | number | 请求资源起始位置
| limit | number | 最大资源条数
| total_count | number | 资源总条数
| data | object[] {data-tooltip="对应PHP的array"} | 商户管理记录详情列表
| sub_mchid {data-indent=1} | string | 子商户号
| manage_record_id {data-indent=1} | string | 商户管理记录ID
| manage_record_type {data-indent=1} | string | 商户管理记录类型<br/>`FUNCTIONAL_LIMIT_RECORD` \| `INVESTIGATE_RECORD` 枚举值之一
| manage_time {data-indent=1} | string | 管控时间
| manage_reason {data-indent=1} | string | 管控原因
| limit_ability {data-indent=1} | string | 限制功能
| recover_way {data-indent=1} | string | 解除管控方式<br/>`SUBMIT_INFORMATION` \| `VERIFY_INACTIVE_MERCHANT_IDENTITY` \| `MODIFY_ORGANIZATION_INFORMATION` \| `OTHER` 枚举值之一
| allow_submit {data-indent=1} | boolean | 是否允许提交资料
| forbid_submit_reason {data-indent=1} | string | 禁止提交资料原因
| submit_start_time {data-indent=1} | string | 可提交资料开始时间
| submit_end_time {data-indent=1} | string | 可提交资料结束时间
| manage_record_state {data-indent=1} | string | 商户管理记录状态<br/>`PENDING` \| `SUBMITTED` \| `EXPIRED` \| `UNDER_REVIEW` \| `RECOVERED` \| `REJECTED` 枚举值之一
| recover_time {data-indent=1} | string | 解除管控时间
| recover_reason {data-indent=1} | string | 解除管控原因<br/>`MERCHANT_SUBMIT_RECOVER` \| `MERCHANT_OPERATE_RECOVER` \| `PLATFORM_AUTO_RECOVER` 枚举值之一
| reject_reason {data-indent=1} | string | 申诉驳回原因
| approve_time {data-indent=1} | string | 可提交资料结束时间
| requested_item_info {data-indent=1} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 要求提交的资料
| {colspan=3 .im-table-line}
| record_fields {data-required data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 资料项集合
| item_id {data-indent=3} | string | 资料项ID
| field_name {data-indent=3} | string | 资料项英文名
| name {data-indent=3} | string | 资料项中文名
| type {data-indent=3} | number | 资料项类型<br/>`1` \| `2` \| `11` \| `15` 枚举值之一
| tips {data-indent=3} | string | 资料项填写提示
| placeholder {data-indent=3} | string | 输入框占位文案
| tooltip {data-indent=3} | string | 叹号悬浮提示语
| required {data-indent=3} | number | 是否必须提交<br/>`0` \| `1` 枚举值之一
| check_rule {data-indent=3} | object {data-tooltip="对应PHP的array"} | 校验规则
| min_length {data-indent=4} | number | 字符串最小长度
| max_length {data-indent=4} | number | 字符串最大长度
| enum_file_exts {data-indent=4} | string[] | 限制提交的文件后缀<br/>`png` \| `jpg` \| `jpeg` 枚举值之一
| max_file_size {data-indent=4} | number | 限制文件提交大小，单位M
| enum_keys {data-indent=4} | number[] | 枚举可选的字段枚举值
| enum_values {data-indent=4} | string[] | 展示给商户看的枚举可选的字段列表
| relations {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 资料项关联规则集合<br/>(不同资料项ID取交集*且*，相同资料项ID不同资料项值取并集*或*)
| source_key {data-indent=4} | number | 关联的资料项ID
| source_value {data-indent=4} | string | 关联的资料项值
| need_encrypt {data-indent=3} | boolean | 提交内容需要加密

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014940381)
