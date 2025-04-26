# 查询及设置营销事件消息通知地址 {#mix}

## 获取已设置的消息通知地址 {#get}

用于查询已经设置的接收营销事件通知的URL。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mchid {data-required data-indent=1} | string | 商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->favor->callbacks->getAsync([
  'query' => [
    'mchid' => '9856888',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/favor/callbacks')->getAsync([
  'query' => [
    'mchid' => '9856888',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/favor/callbacks']->getAsync([
  'query' => [
    'mchid' => '9856888',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->favor->callbacks->get([
  'query' => [
    'mchid' => '9856888',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/callbacks')->get([
  'query' => [
    'mchid' => '9856888',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/callbacks']->get([
  'query' => [
    'mchid' => '9856888',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid {data-required} | string | 商户号
| notify_url {data-required} | string | 通知地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012464070) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012464155)

## 设置消息通知地址 {#post}

用于设置接收营销事件通知的URL，可接收营销相关的事件通知，包括核销、发放、退款等。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| mchid {data-required data-indent=1} | string | 商户号
| notify_url {data-required data-indent=1} | string | 通知url地址
| switch {data-indent=1} | boolean | 回调开关

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->favor->callbacks->postAsync([
  'json' => [
    'mchid'      => '9856888',
    'notify_url' => 'https://pay.weixin.qq.com',
    'switch'     => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/favor/callbacks')->postAsync([
  'json' => [
    'mchid'      => '9856888',
    'notify_url' => 'https://pay.weixin.qq.com',
    'switch'     => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/favor/callbacks']->postAsync([
  'json' => [
    'mchid'      => '9856888',
    'notify_url' => 'https://pay.weixin.qq.com',
    'switch'     => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->favor->callbacks->post([
  'json' => [
    'mchid'      => '9856888',
    'notify_url' => 'https://pay.weixin.qq.com',
    'switch'     => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/callbacks')->post([
  'json' => [
    'mchid'      => '9856888',
    'notify_url' => 'https://pay.weixin.qq.com',
    'switch'     => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/callbacks']->post([
  'json' => [
    'mchid'      => '9856888',
    'notify_url' => 'https://pay.weixin.qq.com',
    'switch'     => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| update_time {data-required} | string | 修改时间
| notify_url {data-required} | string | 通知地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012464198) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012464176)
