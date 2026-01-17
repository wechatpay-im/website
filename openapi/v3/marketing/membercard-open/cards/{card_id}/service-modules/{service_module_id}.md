# 修改和移除会员卡服务项 {#mix}

## 修改会员卡服务项 {#patch}

在会员卡模板上添加并展示某个会员服务项，指定添加服务项id后会在会员卡上展示对应的会员服务

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡id
| service_module_id {data-required} | string | 会员服务项ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| jump_miniprogram {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 跳转小程序
| appid {data-required data-indent=2} | string | 小程序appid
| path {data-required data-indent=2} | string | 小程序path

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->serviceModules->_service_module_id_->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'service_module_id' => '666',
  'json' => [
    'jump_miniprogram' => [
      'appid' => 'wx37178d097a6851d8',
      'path'  => 'pages/index/index',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/service-modules/{service_module_id}')->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'service_module_id' => '666',
  'json' => [
    'jump_miniprogram' => [
      'appid' => 'wx37178d097a6851d8',
      'path'  => 'pages/index/index',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/service-modules/{service_module_id}']->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'service_module_id' => '666',
  'json' => [
    'jump_miniprogram' => [
      'appid' => 'wx37178d097a6851d8',
      'path'  => 'pages/index/index',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->serviceModules->_service_module_id_->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'service_module_id' => '666',
  'json' => [
    'jump_miniprogram' => [
      'appid' => 'wx37178d097a6851d8',
      'path'  => 'pages/index/index',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/service-modules/{service_module_id}')->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'service_module_id' => '666',
  'json' => [
    'jump_miniprogram' => [
      'appid' => 'wx37178d097a6851d8',
      'path'  => 'pages/index/index',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/service-modules/{service_module_id}']->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'service_module_id' => '666',
  'json' => [
    'jump_miniprogram' => [
      'appid' => 'wx37178d097a6851d8',
      'path'  => 'pages/index/index',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡id
| service_module_id {data-required} | string | 会员服务项ID
| jump_miniprogram {data-required} | object {data-tooltip="对应PHP的array"} | 跳转小程序
| appid {data-required data-indent=1} | string | 小程序appid
| path {data-required data-indent=1} | string | 小程序path

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4017167417) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017176491)

## 移除会员卡服务项 {#delete}

将已添加的会员服务项进行移除，移除后用户的会员卡详情页不会再展示已移除的服务项

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡id
| service_module_id {data-required} | string | 会员服务项ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->serviceModules->_service_module_id_->deleteAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'service_module_id' => '666',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/service-modules/{service_module_id}')->deleteAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'service_module_id' => '666',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/service-modules/{service_module_id}']->deleteAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'service_module_id' => '666',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->serviceModules->_service_module_id_->delete([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'service_module_id' => '666',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/service-modules/{service_module_id}')->delete([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'service_module_id' => '666',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/service-modules/{service_module_id}']->delete([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'service_module_id' => '666',
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4017167557) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017176594)
