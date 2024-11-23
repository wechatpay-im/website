---
title: 服务商评估用户分层
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 服务ID
| appid {data-required data-indent=1} | string | 服务商的公众号ID
| sub_appid {data-indent=1} | string | 子商户的公众号ID
| authorization_code {data-indent=1} | string | 授权协议号
| openid {data-indent=1} | string | 服务商的用户标识
| sub_openid {data-indent=1} | string | 子商户的用户标识
| shopping_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 先用后付商品信息
| goods {data-required data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 商品列表
| name {data-required data-indent=3} | string | 商品名称
| picture {data-required data-indent=3} | string | 商品图片链接
| amount {data-required data-indent=3} | number | 商品单价金额
| count {data-required data-indent=3} | number | 商品数量
| category_id {data-indent=3} | string[] | 
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 子商户商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->permissions->assessUserRiskLevel->postAsync([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'authorization_code' => '1234323JKHDFE1243252',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'shopping_info' => [
      'goods' => [[
        'name' => '森海塞尔 MOMENTUM 4 无线耳机大馒头4 头戴式蓝牙音乐耳机自适应降噪',
        'picture' => 'http://mmbiz.qpic.cn/mmbiz_png/ldTw9dg46zkjOrzyTkbQAvQkysliaiblZhdthZWewgQMyqLZwStaNEsJrYmjwh2MlK7G4wibAFOEuISQKplSnxMWA/640?wx_fmt=png&wxfrom=200',
        'amount' => 550,
        'count' => 1,
        'category_id' => ['string'],
      ],],
    ],
  ],
  'query' => [
    'sub_mchid' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/permissions/assess-user-risk-level')->postAsync([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'authorization_code' => '1234323JKHDFE1243252',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'shopping_info' => [
      'goods' => [[
        'name' => '森海塞尔 MOMENTUM 4 无线耳机大馒头4 头戴式蓝牙音乐耳机自适应降噪',
        'picture' => 'http://mmbiz.qpic.cn/mmbiz_png/ldTw9dg46zkjOrzyTkbQAvQkysliaiblZhdthZWewgQMyqLZwStaNEsJrYmjwh2MlK7G4wibAFOEuISQKplSnxMWA/640?wx_fmt=png&wxfrom=200',
        'amount' => 550,
        'count' => 1,
        'category_id' => ['string'],
      ],],
    ],
  ],
  'query' => [
    'sub_mchid' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/permissions/assess-user-risk-level']->postAsync([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'authorization_code' => '1234323JKHDFE1243252',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'shopping_info' => [
      'goods' => [[
        'name' => '森海塞尔 MOMENTUM 4 无线耳机大馒头4 头戴式蓝牙音乐耳机自适应降噪',
        'picture' => 'http://mmbiz.qpic.cn/mmbiz_png/ldTw9dg46zkjOrzyTkbQAvQkysliaiblZhdthZWewgQMyqLZwStaNEsJrYmjwh2MlK7G4wibAFOEuISQKplSnxMWA/640?wx_fmt=png&wxfrom=200',
        'amount' => 550,
        'count' => 1,
        'category_id' => ['string'],
      ],],
    ],
  ],
  'query' => [
    'sub_mchid' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->permissions->assessUserRiskLevel->post([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'authorization_code' => '1234323JKHDFE1243252',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'shopping_info' => [
      'goods' => [[
        'name' => '森海塞尔 MOMENTUM 4 无线耳机大馒头4 头戴式蓝牙音乐耳机自适应降噪',
        'picture' => 'http://mmbiz.qpic.cn/mmbiz_png/ldTw9dg46zkjOrzyTkbQAvQkysliaiblZhdthZWewgQMyqLZwStaNEsJrYmjwh2MlK7G4wibAFOEuISQKplSnxMWA/640?wx_fmt=png&wxfrom=200',
        'amount' => 550,
        'count' => 1,
        'category_id' => ['string'],
      ],],
    ],
  ],
  'query' => [
    'sub_mchid' => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/permissions/assess-user-risk-level')->post([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'authorization_code' => '1234323JKHDFE1243252',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'shopping_info' => [
      'goods' => [[
        'name' => '森海塞尔 MOMENTUM 4 无线耳机大馒头4 头戴式蓝牙音乐耳机自适应降噪',
        'picture' => 'http://mmbiz.qpic.cn/mmbiz_png/ldTw9dg46zkjOrzyTkbQAvQkysliaiblZhdthZWewgQMyqLZwStaNEsJrYmjwh2MlK7G4wibAFOEuISQKplSnxMWA/640?wx_fmt=png&wxfrom=200',
        'amount' => 550,
        'count' => 1,
        'category_id' => ['string'],
      ],],
    ],
  ],
  'query' => [
    'sub_mchid' => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/permissions/assess-user-risk-level']->post([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'authorization_code' => '1234323JKHDFE1243252',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'shopping_info' => [
      'goods' => [[
        'name' => '森海塞尔 MOMENTUM 4 无线耳机大馒头4 头戴式蓝牙音乐耳机自适应降噪',
        'picture' => 'http://mmbiz.qpic.cn/mmbiz_png/ldTw9dg46zkjOrzyTkbQAvQkysliaiblZhdthZWewgQMyqLZwStaNEsJrYmjwh2MlK7G4wibAFOEuISQKplSnxMWA/640?wx_fmt=png&wxfrom=200',
        'amount' => 550,
        'count' => 1,
        'category_id' => ['string'],
      ],],
    ],
  ],
  'query' => [
    'sub_mchid' => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| service_id {data-required}| string | 服务ID
| appid {data-required}| string | 公众号ID
| mchid {data-required}| string | 商户号
| openid | string | 用户标识
| authorization_code | string | 授权协议号
| authorization_state {data-required}| string | 授权状态
| notify_url | string | 授权通知地址
| cancel_authorization_time | string | 最近一次解除授权时间
| authorization_success_time | string | 最近一次授权成功时间
| sub_mchid | string | 子商户商户号
| sub_appid | string | 子商户的公众号ID
| sub_openid | string | 子商户的用户标识
| user_label | string | 用户标签
| channel_id | string | 渠道商商户号
| user_risk_level | number | 用户分层
| risk_level_version | number | 分层版本

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/assess-partner-user-risk-level.html)
