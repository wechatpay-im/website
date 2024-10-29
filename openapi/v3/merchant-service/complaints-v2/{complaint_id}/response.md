---
title: 提交回复
description: 商户可通过调用此接口，提交回复内容。其中上传图片凭证需首先调用商户上传反馈图片接口，得到图片id，再将id填入请求。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| complaint_id | string | 投诉单号
| json | object | 声明请求的`JSON`数据结构
| complainted_mchid {data-indent=1} | string | 被诉商户号
| response_content {data-indent=1} | string | 回复内容
| response_images {data-indent=1} | string[] | 回复图片
| jump_url {data-indent=1} | string | 跳转链接
| jump_url_text {data-indent=1} | string | 跳转链接文案
| mini_program_jump_info {data-indent=1} | object | 跳转小程序信息
| appid {data-indent=2} | string | 跳转小程序APPID
| path {data-indent=2} | string | 跳转小程序页面PATH
| text {data-indent=2} | string | 跳转小程序页面名称

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaintsV2->_complaint_id_->response->postAsync([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'response_content' => '已与用户沟通解决',
    'response_images' => ['MediaId'],
    'jump_url' => 'https://www.xxx.com/notify',
    'jump_url_text' => '查看订单详情',
    'mini_program_jump_info' => [
      'appid' => 'example_appid',
      'path' => 'example_path',
      'text' => 'example_text',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaints-v2/{complaint_id}/response')->postAsync([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'response_content' => '已与用户沟通解决',
    'response_images' => ['MediaId'],
    'jump_url' => 'https://www.xxx.com/notify',
    'jump_url_text' => '查看订单详情',
    'mini_program_jump_info' => [
      'appid' => 'example_appid',
      'path' => 'example_path',
      'text' => 'example_text',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaints-v2/{complaint_id}/response']->postAsync([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'response_content' => '已与用户沟通解决',
    'response_images' => ['MediaId'],
    'jump_url' => 'https://www.xxx.com/notify',
    'jump_url_text' => '查看订单详情',
    'mini_program_jump_info' => [
      'appid' => 'example_appid',
      'path' => 'example_path',
      'text' => 'example_text',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaintsV2->_complaint_id_->response->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'response_content' => '已与用户沟通解决',
    'response_images' => ['MediaId'],
    'jump_url' => 'https://www.xxx.com/notify',
    'jump_url_text' => '查看订单详情',
    'mini_program_jump_info' => [
      'appid' => 'example_appid',
      'path' => 'example_path',
      'text' => 'example_text',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaints-v2/{complaint_id}/response')->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'response_content' => '已与用户沟通解决',
    'response_images' => ['MediaId'],
    'jump_url' => 'https://www.xxx.com/notify',
    'jump_url_text' => '查看订单详情',
    'mini_program_jump_info' => [
      'appid' => 'example_appid',
      'path' => 'example_path',
      'text' => 'example_text',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaints-v2/{complaint_id}/response']->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'response_content' => '已与用户沟通解决',
    'response_images' => ['MediaId'],
    'jump_url' => 'https://www.xxx.com/notify',
    'jump_url_text' => '查看订单详情',
    'mini_program_jump_info' => [
      'appid' => 'example_appid',
      'path' => 'example_path',
      'text' => 'example_text',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/consumer-complaint/complaints/response-complaint-v2.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_14.shtml)
