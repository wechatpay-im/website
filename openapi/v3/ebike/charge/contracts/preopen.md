---
title: 预开通服务
description: 商户通过该接口获取preopenid，跳转到签约小程序后，用preopenid进行签约开通，本接口用于开通自动扣费前上传必要的信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 特约商户号
| appid {data-indent=1} | string | 服务商公众号ID
| sub_appid {data-indent=1} | string | 特约商户公众号ID
| trade_scene {data-indent=1} | string | 交易场景
| openid {data-indent=1} | string | 用户标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ebike->charge->contracts->preopen->postAsync([
  'json' => [
    'sub_mchid' => '1510770601',
    'appid' => 'wx47c677487ce3ac47',
    'sub_appid' => 'wxcc603d9f0d54eaf0',
    'trade_scene' => 'CHARGE',
    'openid' => 'ot35_4gNgXsUuh2sQY0lT9N08AU0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ebike/charge/contracts/preopen')->postAsync([
  'json' => [
    'sub_mchid' => '1510770601',
    'appid' => 'wx47c677487ce3ac47',
    'sub_appid' => 'wxcc603d9f0d54eaf0',
    'trade_scene' => 'CHARGE',
    'openid' => 'ot35_4gNgXsUuh2sQY0lT9N08AU0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ebike/charge/contracts/preopen']->postAsync([
  'json' => [
    'sub_mchid' => '1510770601',
    'appid' => 'wx47c677487ce3ac47',
    'sub_appid' => 'wxcc603d9f0d54eaf0',
    'trade_scene' => 'CHARGE',
    'openid' => 'ot35_4gNgXsUuh2sQY0lT9N08AU0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ebike->charge->contracts->preopen->post([
  'json' => [
    'sub_mchid' => '1510770601',
    'appid' => 'wx47c677487ce3ac47',
    'sub_appid' => 'wxcc603d9f0d54eaf0',
    'trade_scene' => 'CHARGE',
    'openid' => 'ot35_4gNgXsUuh2sQY0lT9N08AU0',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ebike/charge/contracts/preopen')->post([
  'json' => [
    'sub_mchid' => '1510770601',
    'appid' => 'wx47c677487ce3ac47',
    'sub_appid' => 'wxcc603d9f0d54eaf0',
    'trade_scene' => 'CHARGE',
    'openid' => 'ot35_4gNgXsUuh2sQY0lT9N08AU0',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ebike/charge/contracts/preopen']->post([
  'json' => [
    'sub_mchid' => '1510770601',
    'appid' => 'wx47c677487ce3ac47',
    'sub_appid' => 'wxcc603d9f0d54eaf0',
    'trade_scene' => 'CHARGE',
    'openid' => 'ot35_4gNgXsUuh2sQY0lT9N08AU0',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| preopen_id | string | 预开通ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/vehicle/ebike/chapter3_3.shtml)
