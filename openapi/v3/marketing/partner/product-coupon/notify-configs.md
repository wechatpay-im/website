# 设置及获取商品券事件通知地址 {#mix}

## 设置商品券事件通知地址 {#post}

服务商可以通过本接口设置商品券相关事件的回调地址，该地址配置为服务商维度配置，该服务商下的所有商品券相关事件均会通知到该地址。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| notify_url {data-required data-indent=1} | string | 通知URL地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->notifyConfigs->postAsync([
  'json' => [
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/notify-configs')->postAsync([
  'json' => [
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/notify-configs']->postAsync([
  'json' => [
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->notifyConfigs->post([
  'json' => [
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/notify-configs')->post([
  'json' => [
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/notify-configs']->post([
  'json' => [
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| notify_url {data-required} | string | 通知URL地址
| update_time {data-required} | string | 修改时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015781286)

## 获取商品券事件通知地址 {#get}

服务商可以通过本接口查询商品券相关事件的回调地址，该地址配置为服务商维度配置，该服务商下的所有商品券相关事件均会通知到该地址。前置条件：服务商已经配置商品券事件通知地址

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->notifyConfigs->getAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/notify-configs')->getAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/notify-configs']->getAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->notifyConfigs->get([]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/notify-configs')->get([]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/notify-configs']->get([]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| notify_url {data-required} | string | 通知URL地址
| update_time {data-required} | string | 修改时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015781284)
