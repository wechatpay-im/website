---
title: 查询交易拦截申诉详情
description: 通过该接口可查询交易拦截申诉详情信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| block_submission_id {data-required} | string | 交易拦截申诉ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->transactionBlock->transactionBlockSubmissions->_block_submission_id_->getAsync([
  'block_submission_id' => 'B021234566799876aacsecd',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/transaction-block/transaction-block-submissions/{block_submission_id}')->getAsync([
  'block_submission_id' => 'B021234566799876aacsecd',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/transaction-block/transaction-block-submissions/{block_submission_id}']->getAsync([
  'block_submission_id' => 'B021234566799876aacsecd',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->transactionBlock->transactionBlockSubmissions->_block_submission_id_->get([
  'block_submission_id' => 'B021234566799876aacsecd',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/transaction-block/transaction-block-submissions/{block_submission_id}')->get([
  'block_submission_id' => 'B021234566799876aacsecd',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/transaction-block/transaction-block-submissions/{block_submission_id}']->get([
  'block_submission_id' => 'B021234566799876aacsecd',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| block_submission_id | string | 交易拦截申诉ID
| submit_time | string | 提交时间
| review_result | string | 审核结果<br/>`EMPTY` \| `PASS` \| `REJECT` 枚举值之一
| review_time | string | 审核时间
| review_reject_reason | string | 审核驳回原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014940449)
