---
title: 提交回复
description: 商户可通过调用此接口，提交回复内容。其中上传图片凭证需首先调用商户上传反馈图片接口，得到图片id，再将id填入请求。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| complaint_id {data-required} | string | 投诉单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| complainted_mchid {data-required data-indent=1} | string | 被诉商户号
| response_content {data-required data-indent=1} | string | 回复内容
| response_images {data-indent=1} | string[] | 回复图片
| jump_url {data-indent=1} | string | 跳转链接
| jump_url_text {data-indent=1} | string | 跳转链接文案

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->merchantService->complaints->_complaint_id_->response->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'response_content'  => '已与用户沟通解决',
    'response_images'   => ['file23578_21798531.jpg'],
    'jump_url'          => 'https://www.xxx.com/notify',
    'jump_url_text'     => '查看订单详情',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/merchant-service/complaints/{complaint_id}/response')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'response_content'  => '已与用户沟通解决',
    'response_images'   => ['file23578_21798531.jpg'],
    'jump_url'          => 'https://www.xxx.com/notify',
    'jump_url_text'     => '查看订单详情',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/global/merchant-service/complaints/{complaint_id}/response']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'response_content'  => '已与用户沟通解决',
    'response_images'   => ['file23578_21798531.jpg'],
    'jump_url'          => 'https://www.xxx.com/notify',
    'jump_url_text'     => '查看订单详情',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->merchantService->complaints->_complaint_id_->response->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'response_content'  => '已与用户沟通解决',
    'response_images'   => ['file23578_21798531.jpg'],
    'jump_url'          => 'https://www.xxx.com/notify',
    'jump_url_text'     => '查看订单详情',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/global/merchant-service/complaints/{complaint_id}/response')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'response_content'  => '已与用户沟通解决',
    'response_images'   => ['file23578_21798531.jpg'],
    'jump_url'          => 'https://www.xxx.com/notify',
    'jump_url_text'     => '查看订单详情',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/global/merchant-service/complaints/{complaint_id}/response']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'response_content'  => '已与用户沟通解决',
    'response_images'   => ['file23578_21798531.jpg'],
    'jump_url'          => 'https://www.xxx.com/notify',
    'jump_url_text'     => '查看订单详情',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}
