# 管理用户投诉通知回调地址 {#mix}

## 创建投诉通知回调 {#post}

商户通过调用此接口创建投诉通知回调URL，当用户产生新投诉且投诉状态已变更时，微信支付会通过回 调URL通知商户。对于服务商、渠道商，会收到所有子商户的投诉信息推送。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| url {data-required data-indent=1} | string | 通知地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaintNotifications->postAsync([
  'json' => [
    'url' => 'https://www.xxx.com/notify',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaint-notifications')->postAsync([
  'json' => [
    'url' => 'https://www.xxx.com/notify',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaint-notifications']->postAsync([
  'json' => [
    'url' => 'https://www.xxx.com/notify',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaintNotifications->post([
  'json' => [
    'url' => 'https://www.xxx.com/notify',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaint-notifications')->post([
  'json' => [
    'url' => 'https://www.xxx.com/notify',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaint-notifications']->post([
  'json' => [
    'url' => 'https://www.xxx.com/notify',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid {data-required} | string | 商户号
| url {data-required} | string | 通知地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/consumer-complaint/complaint-notifications/create-complaint-notifications.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_2.shtml)

## 查询投诉通知回调 {#get}

商户通过调用此接口查询投诉通知的回调URL。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaintNotifications->getAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaint-notifications')->getAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaint-notifications']->getAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaintNotifications->get([]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaint-notifications')->get([]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaint-notifications']->get([]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid {data-required} | string | 商户号
| url {data-required} | string | 通知地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/consumer-complaint/complaint-notifications/query-complaint-notifications.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_3.shtml)

## 更新投诉通知回调 {#put}

商户通过调用此接口更新投诉通知的回调URL。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| url {data-required data-indent=1} | string | 通知地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaintNotifications->putAsync([
  'json' => [
    'url' => 'https://www.xxx.com/notify',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaint-notifications')->putAsync([
  'json' => [
    'url' => 'https://www.xxx.com/notify',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaint-notifications']->putAsync([
  'json' => [
    'url' => 'https://www.xxx.com/notify',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaintNotifications->put([
  'json' => [
    'url' => 'https://www.xxx.com/notify',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaint-notifications')->put([
  'json' => [
    'url' => 'https://www.xxx.com/notify',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaint-notifications']->put([
  'json' => [
    'url' => 'https://www.xxx.com/notify',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid {data-required} | string | 商户号
| url {data-required} | string | 通知地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/consumer-complaint/complaint-notifications/update-complaint-notifications.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_4.shtml)

## 删除投诉通知回调 {#delete}

当商户不再需要推送通知时，可通过调用此接口删除投诉通知的回调URL，取消通知回调。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaintNotifications->deleteAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaint-notifications')->deleteAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaint-notifications']->deleteAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaintNotifications->delete([]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaint-notifications')->delete([]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaint-notifications']->delete([]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012460474)
