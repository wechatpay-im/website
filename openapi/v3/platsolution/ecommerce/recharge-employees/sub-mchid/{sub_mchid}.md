---
title: 查询二级商户可扫码充值员工列表
description: 收付通平台可以调用此接口查询二级子商户的最新的可扫码充值员工列表。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->rechargeEmployees->subMchid->_sub_mchid_->getAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/recharge-employees/sub-mchid/{sub_mchid}')->getAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/recharge-employees/sub-mchid/{sub_mchid}']->getAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->rechargeEmployees->subMchid->_sub_mchid_->get([
  'sub_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/recharge-employees/sub-mchid/{sub_mchid}')->get([
  'sub_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/recharge-employees/sub-mchid/{sub_mchid}']->get([
  'sub_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| employees | object[] {data-tooltip="对应PHP的array"} | 员工列表
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| sp_openid {data-indent=1} | string | 员工OpenID
| state {data-indent=1} | string | 员工状态<br/>`EFFECTIVE` 枚举值
| create_time {data-indent=1} | string | 添加员工时间
| update_time {data-indent=1} | string | 最后更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013521757)
