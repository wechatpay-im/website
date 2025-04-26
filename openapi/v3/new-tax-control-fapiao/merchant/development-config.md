# 配置及查询电子发票开发选项信息 {#mix}

## 配置开发选项 {#patch}

配置开发选项(例如回调地址等)

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| callback_url {data-indent=1} | string | 商户回调地址
| sub_mch_code {data-indent=1} | string | 子商户号
| show_fapiao_cell {data-indent=1} | boolean | 全部账单展示开发票入口开关

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->merchant->developmentConfig->patchAsync([
  'json' => [
    'callback_url'     => 'https://pay.weixin.qq.com/callback',
    'sub_mch_code'     => '1900000109',
    'show_fapiao_cell' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/merchant/development-config')->patchAsync([
  'json' => [
    'callback_url'     => 'https://pay.weixin.qq.com/callback',
    'sub_mch_code'     => '1900000109',
    'show_fapiao_cell' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/merchant/development-config']->patchAsync([
  'json' => [
    'callback_url'     => 'https://pay.weixin.qq.com/callback',
    'sub_mch_code'     => '1900000109',
    'show_fapiao_cell' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->merchant->developmentConfig->patch([
  'json' => [
    'callback_url'     => 'https://pay.weixin.qq.com/callback',
    'sub_mch_code'     => '1900000109',
    'show_fapiao_cell' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/merchant/development-config')->patch([
  'json' => [
    'callback_url'     => 'https://pay.weixin.qq.com/callback',
    'sub_mch_code'     => '1900000109',
    'show_fapiao_cell' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/merchant/development-config']->patch([
  'json' => [
    'callback_url'     => 'https://pay.weixin.qq.com/callback',
    'sub_mch_code'     => '1900000109',
    'show_fapiao_cell' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| callback_url {data-required} | string | 商户回调地址
| show_fapiao_cell | boolean | 全部账单展示开发票入口开关

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012529457) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012474031)

## 查询商户配置的开发选项 {#get}

查询商户配置的开发选项

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->merchant->developmentConfig->getAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/merchant/development-config')->getAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/merchant/development-config']->getAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->merchant->developmentConfig->get([]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/merchant/development-config')->get([]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/merchant/development-config']->get([]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| callback_url {data-required} | string | 商户回调地址
| show_fapiao_cell | boolean | 全部账单展示开发票入口开关

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012529526) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012474033)
