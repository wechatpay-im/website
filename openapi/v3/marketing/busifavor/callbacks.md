# 设置及查询商家券事件通知地址 {#mix}

## 设置商家券事件通知地址 {#post}

用于设置接收商家券相关事件通知的URL，可接收商家券相关的事件通知、包括发放通知等。需要设置接收通知的URL，并在商户平台开通营销事件推送的能力，即可接收到相关通知。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| mchid {data-indent=1} | string | 商户号
| notify_url {data-required data-indent=1} | string | 通知URL地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->callbacks->postAsync([
  'json' => [
    'mchid'      => '10000098',
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/callbacks')->postAsync([
  'json' => [
    'mchid'      => '10000098',
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/callbacks']->postAsync([
  'json' => [
    'mchid'      => '10000098',
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->callbacks->post([
  'json' => [
    'mchid'      => '10000098',
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/callbacks')->post([
  'json' => [
    'mchid'      => '10000098',
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/callbacks']->post([
  'json' => [
    'mchid'      => '10000098',
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| update_time | string | 修改时间
| notify_url {data-required} | string | 通知URL地址
| mchid {data-required} | string | 商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012465431) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012465425)

## 查询商家券事件通知地址 {#get}

通过调用此接口可查询设置的通知URL。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mchid {data-required data-indent=1} | string | 商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->callbacks->getAsync([
  'query' => [
    'mchid' => '10000098',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/callbacks')->getAsync([
  'query' => [
    'mchid' => '10000098',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/callbacks']->getAsync([
  'query' => [
    'mchid' => '10000098',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->callbacks->get([
  'query' => [
    'mchid' => '10000098',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/callbacks')->get([
  'query' => [
    'mchid' => '10000098',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/callbacks']->get([
  'query' => [
    'mchid' => '10000098',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| notify_url {data-required} | string | 通知URL地址
| mchid {data-required} | string | 商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012465507) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012465557)
