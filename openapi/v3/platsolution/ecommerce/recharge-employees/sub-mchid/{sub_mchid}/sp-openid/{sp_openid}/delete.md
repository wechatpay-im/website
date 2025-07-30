---
title: 删除二级商户可扫码充值员工
description: 收付通平台可以调用此接口删除二级子商户的可扫码充值员工。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| sp_openid {data-required} | string | 员工OpenID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->rechargeEmployees->subMchid->_sub_mchid_->spOpenid->_sp_openid_->delete->postAsync([
  'sub_mchid' => '1900000109',
  'sp_openid' => 'oLTPCuCsfN3ABBz50VUZBNlHDbUU',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/recharge-employees/sub-mchid/{sub_mchid}/sp-openid/{sp_openid}/delete')->postAsync([
  'sub_mchid' => '1900000109',
  'sp_openid' => 'oLTPCuCsfN3ABBz50VUZBNlHDbUU',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/recharge-employees/sub-mchid/{sub_mchid}/sp-openid/{sp_openid}/delete']->postAsync([
  'sub_mchid' => '1900000109',
  'sp_openid' => 'oLTPCuCsfN3ABBz50VUZBNlHDbUU',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->rechargeEmployees->subMchid->_sub_mchid_->spOpenid->_sp_openid_->delete->post([
  'sub_mchid' => '1900000109',
  'sp_openid' => 'oLTPCuCsfN3ABBz50VUZBNlHDbUU',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/recharge-employees/sub-mchid/{sub_mchid}/sp-openid/{sp_openid}/delete')->post([
  'sub_mchid' => '1900000109',
  'sp_openid' => 'oLTPCuCsfN3ABBz50VUZBNlHDbUU',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/recharge-employees/sub-mchid/{sub_mchid}/sp-openid/{sp_openid}/delete']->post([
  'sub_mchid' => '1900000109',
  'sp_openid' => 'oLTPCuCsfN3ABBz50VUZBNlHDbUU',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| sp_openid | string | 员工OpenID
| state | string | 员工状态<br/>`EFFECTIVE` \| `DELETED` 枚举值之一
| create_time | string | 添加员工时间
| update_time | string | 最后更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013521753)
