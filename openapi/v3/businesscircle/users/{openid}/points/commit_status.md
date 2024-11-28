---
title: 商圈会员待积分状态查询
description: 通过此API，商圈商户/服务商可以自行查询已授权“商圈会员积分服务”的会员用户当日在该商圈的待积分状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 顾客openid
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 商圈商户ID
| brandid {data-required data-indent=1} | integer | 品牌ID
| appid {data-required data-indent=1} | string | 应用ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->businesscircle->users->_openid_->points->commit_status->getAsync([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'sub_mchid' => '1900000109',
    'brandid'   => 1000,
    'appid'     => 'wx931386123456789e',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/businesscircle/users/{openid}/points/commit_status')->getAsync([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'sub_mchid' => '1900000109',
    'brandid'   => 1000,
    'appid'     => 'wx931386123456789e',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/businesscircle/users/{openid}/points/commit_status']->getAsync([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'sub_mchid' => '1900000109',
    'brandid'   => 1000,
    'appid'     => 'wx931386123456789e',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->businesscircle->users->_openid_->points->commit_status->get([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'sub_mchid' => '1900000109',
    'brandid'   => 1000,
    'appid'     => 'wx931386123456789e',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/businesscircle/users/{openid}/points/commit_status')->get([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'sub_mchid' => '1900000109',
    'brandid'   => 1000,
    'appid'     => 'wx931386123456789e',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/businesscircle/users/{openid}/points/commit_status']->get([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'sub_mchid' => '1900000109',
    'brandid'   => 1000,
    'appid'     => 'wx931386123456789e',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/smart-business-circle/points/get-points-commit-status.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/smart-business-circle/points/get-points-commit-status.html)
