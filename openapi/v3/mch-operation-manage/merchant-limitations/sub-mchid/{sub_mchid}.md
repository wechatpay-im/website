---
title: 查询子商户管控情况
description: 服务商查询子商户的管控情况。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->mchOperationManage->merchantLimitations->subMchid->_sub_mchid_->getAsync([
  'sub_mchid' => '123000110',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/mch-operation-manage/merchant-limitations/sub-mchid/{sub_mchid}')->getAsync([
  'sub_mchid' => '123000110',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/mch-operation-manage/merchant-limitations/sub-mchid/{sub_mchid}']->getAsync([
  'sub_mchid' => '123000110',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->mchOperationManage->merchantLimitations->subMchid->_sub_mchid_->get([
  'sub_mchid' => '123000110',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/mch-operation-manage/merchant-limitations/sub-mchid/{sub_mchid}')->get([
  'sub_mchid' => '123000110',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/mch-operation-manage/merchant-limitations/sub-mchid/{sub_mchid}']->get([
  'sub_mchid' => '123000110',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid | string | 商户号
| limited_functions | string[] | 
| recovery_specifications | object[] | 被管控原因及解脱路径列表
| limitation_reason {data-indent=1} | string | 商户被管控原因描述
| recover_way {data-indent=1} | string | 商户被该原因管控的解脱路径
| recover_help_url {data-indent=1} | string | 商户被该原因管控的解脱帮助链接
| limitation_reason_type {data-indent=1} | string | 商户被管控原因类型
| relate_limitations {data-indent=1} | string[] | 
| other_relate_limitations {data-indent=1} | string | 商户被该原因管控的其他能力描述
| other_limited_functions | string | 商户其他被管控能力描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/limited-functions-and-reasons/mch-limitations/query-sub-mch-limitation.html)