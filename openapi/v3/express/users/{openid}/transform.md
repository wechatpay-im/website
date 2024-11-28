---
title: 用户openid转换
description: 将另一个应用的用户openid转换为指定appid应用下的用户openid
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户openid
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 目标应用的appid

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->express->users->_openid_->transform->postAsync([
  'openid' => 'xsd3434454567676',
  'json' => [
    'appid' => 'wxaaaa1a123b456c7d',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/express/users/{openid}/transform')->postAsync([
  'openid' => 'xsd3434454567676',
  'json' => [
    'appid' => 'wxaaaa1a123b456c7d',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/express/users/{openid}/transform']->postAsync([
  'openid' => 'xsd3434454567676',
  'json' => [
    'appid' => 'wxaaaa1a123b456c7d',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->express->users->_openid_->transform->post([
  'openid' => 'xsd3434454567676',
  'json' => [
    'appid' => 'wxaaaa1a123b456c7d',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/express/users/{openid}/transform')->post([
  'openid' => 'xsd3434454567676',
  'json' => [
    'appid' => 'wxaaaa1a123b456c7d',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/express/users/{openid}/transform']->post([
  'openid' => 'xsd3434454567676',
  'json' => [
    'appid' => 'wxaaaa1a123b456c7d',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 转换后的openid

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_9_1.shtml)
