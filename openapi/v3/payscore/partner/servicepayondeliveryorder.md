---
title: 创建先用后付订单
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| out_order_no {data-indent=1} | string | 商户服务订单号
| appid {data-indent=1} | string | 公众账号ID
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| service_id {data-indent=1} | string | 服务ID
| service_introduction {data-indent=1} | string | 服务信息
| post_payments {data-indent=1} | object[] | 后付费项目
| name {data-indent=2} | string | 付费项目名称
| amount {data-indent=2} | integer | 金额
| description {data-indent=2} | string | 计费说明
| count {data-indent=2} | integer | 付费数量
| post_discounts {data-indent=1} | object[] | 商户优惠
| name {data-indent=2} | string | 优惠名称
| description {data-indent=2} | string | 优惠说明
| amount {data-indent=2} | integer | 优惠金额
| count {data-indent=2} | integer | 优惠数量
| time_range {data-indent=1} | object | 服务时间
| start_time {data-indent=2} | string | 
| start_time_remark {data-indent=2} | string | 
| end_time {data-indent=2} | string | 
| end_time_remark {data-indent=2} | string | 
| location {data-indent=1} | object | 服务位置
| start_location {data-indent=2} | string | 
| end_location {data-indent=2} | string | 
| risk_fund {data-indent=1} | object | 订单风险金
| name {data-indent=2} | string | 风险金名称<br/>`DEPOSIT` \| `ADVANCE` \| `CASH_DEPOSIT` \| `ESTIMATE_ORDER_COST` 枚举值之一
| amount {data-indent=2} | integer | 风险金额
| description {data-indent=2} | string | 风险说明
| attach {data-indent=1} | string | 商户数据包
| notify_url {data-indent=1} | string | 商户回调地址
| openid {data-indent=1} | string | 用户标识
| sub_openid {data-indent=1} | string | 子商户公众号下的用户标识
| need_user_confirm {data-indent=1} | boolean | 是否需要用户确认
| mchid {data-indent=1} | string | 商户号
| shopping_info {data-indent=1} | object | 
| real_merchant_appid {data-indent=2} | string | 实际购物商家公众号ID
| jump_link {data-indent=2} | object | 
| jump_link_type {data-indent=3} | string | 跳转链接类型<br/>`JUMP_LINK_MINI_PROGRAM` 枚举值
| appid {data-indent=3} | string | 小程序跳转AppID
| path {data-indent=3} | string | 小程序跳转path
| goods {data-indent=2} | object[] | 
| name {data-indent=3} | string | 商品名称
| picture {data-indent=3} | string | 商品图片链接
| amount {data-indent=3} | integer | 商品单价金额
| count {data-indent=3} | integer | 商品数量
| category_id {data-indent=3} | string[] | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->servicepayondeliveryorder->postAsync([
  'json' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wxd678efh567hg6999',
    'service_id' => '500001',
    'service_introduction' => '某某酒店',
    'post_payments' => [[
      'name' => '就餐费用, 服务费',
      'amount' => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'time_range' => [
      'start_time' => '',
      'start_time_remark' => '',
      'end_time' => '',
      'end_time_remark' => '',
    ],
    'location' => [
      'start_location' => '',
      'end_location' => '',
    ],
    'risk_fund' => [
      'name' => 'DEPOSIT',
      'amount' => 10000,
      'description' => '就餐的预估费用',
    ],
    'attach' => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url' => 'https://api.test.com',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'need_user_confirm' => true,
    'mchid' => '1230000109',
    'shopping_info' => [
      'real_merchant_appid' => 'wxd678efh567hg6787',
      'jump_link' => [
        'jump_link_type' => 'JUMP_LINK_MINI_PROGRAM',
        'appid' => '',
        'path' => '',
      ],
      'goods' => [[
        'name' => '森海塞尔 MOMENTUM 4 无线耳机大馒头4 头戴式蓝牙音乐耳机自适应降噪',
        'picture' => 'http://mmbiz.qpic.cn/mmbiz_png/ldTw9dg46zkjOrzyTkbQAvQkysliaiblZhdthZWewgQMyqLZwStaNEsJrYmjwh2MlK7G4wibAFOEuISQKplSnxMWA/640?wx_fmt=png&wxfrom=200',
        'amount' => 40000,
        'count' => 4,
        'category_id' => ['string'],
      ],],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/servicepayondeliveryorder')->postAsync([
  'json' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wxd678efh567hg6999',
    'service_id' => '500001',
    'service_introduction' => '某某酒店',
    'post_payments' => [[
      'name' => '就餐费用, 服务费',
      'amount' => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'time_range' => [
      'start_time' => '',
      'start_time_remark' => '',
      'end_time' => '',
      'end_time_remark' => '',
    ],
    'location' => [
      'start_location' => '',
      'end_location' => '',
    ],
    'risk_fund' => [
      'name' => 'DEPOSIT',
      'amount' => 10000,
      'description' => '就餐的预估费用',
    ],
    'attach' => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url' => 'https://api.test.com',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'need_user_confirm' => true,
    'mchid' => '1230000109',
    'shopping_info' => [
      'real_merchant_appid' => 'wxd678efh567hg6787',
      'jump_link' => [
        'jump_link_type' => 'JUMP_LINK_MINI_PROGRAM',
        'appid' => '',
        'path' => '',
      ],
      'goods' => [[
        'name' => '森海塞尔 MOMENTUM 4 无线耳机大馒头4 头戴式蓝牙音乐耳机自适应降噪',
        'picture' => 'http://mmbiz.qpic.cn/mmbiz_png/ldTw9dg46zkjOrzyTkbQAvQkysliaiblZhdthZWewgQMyqLZwStaNEsJrYmjwh2MlK7G4wibAFOEuISQKplSnxMWA/640?wx_fmt=png&wxfrom=200',
        'amount' => 40000,
        'count' => 4,
        'category_id' => ['string'],
      ],],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/servicepayondeliveryorder']->postAsync([
  'json' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wxd678efh567hg6999',
    'service_id' => '500001',
    'service_introduction' => '某某酒店',
    'post_payments' => [[
      'name' => '就餐费用, 服务费',
      'amount' => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'time_range' => [
      'start_time' => '',
      'start_time_remark' => '',
      'end_time' => '',
      'end_time_remark' => '',
    ],
    'location' => [
      'start_location' => '',
      'end_location' => '',
    ],
    'risk_fund' => [
      'name' => 'DEPOSIT',
      'amount' => 10000,
      'description' => '就餐的预估费用',
    ],
    'attach' => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url' => 'https://api.test.com',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'need_user_confirm' => true,
    'mchid' => '1230000109',
    'shopping_info' => [
      'real_merchant_appid' => 'wxd678efh567hg6787',
      'jump_link' => [
        'jump_link_type' => 'JUMP_LINK_MINI_PROGRAM',
        'appid' => '',
        'path' => '',
      ],
      'goods' => [[
        'name' => '森海塞尔 MOMENTUM 4 无线耳机大馒头4 头戴式蓝牙音乐耳机自适应降噪',
        'picture' => 'http://mmbiz.qpic.cn/mmbiz_png/ldTw9dg46zkjOrzyTkbQAvQkysliaiblZhdthZWewgQMyqLZwStaNEsJrYmjwh2MlK7G4wibAFOEuISQKplSnxMWA/640?wx_fmt=png&wxfrom=200',
        'amount' => 40000,
        'count' => 4,
        'category_id' => ['string'],
      ],],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->servicepayondeliveryorder->post([
  'json' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wxd678efh567hg6999',
    'service_id' => '500001',
    'service_introduction' => '某某酒店',
    'post_payments' => [[
      'name' => '就餐费用, 服务费',
      'amount' => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'time_range' => [
      'start_time' => '',
      'start_time_remark' => '',
      'end_time' => '',
      'end_time_remark' => '',
    ],
    'location' => [
      'start_location' => '',
      'end_location' => '',
    ],
    'risk_fund' => [
      'name' => 'DEPOSIT',
      'amount' => 10000,
      'description' => '就餐的预估费用',
    ],
    'attach' => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url' => 'https://api.test.com',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'need_user_confirm' => true,
    'mchid' => '1230000109',
    'shopping_info' => [
      'real_merchant_appid' => 'wxd678efh567hg6787',
      'jump_link' => [
        'jump_link_type' => 'JUMP_LINK_MINI_PROGRAM',
        'appid' => '',
        'path' => '',
      ],
      'goods' => [[
        'name' => '森海塞尔 MOMENTUM 4 无线耳机大馒头4 头戴式蓝牙音乐耳机自适应降噪',
        'picture' => 'http://mmbiz.qpic.cn/mmbiz_png/ldTw9dg46zkjOrzyTkbQAvQkysliaiblZhdthZWewgQMyqLZwStaNEsJrYmjwh2MlK7G4wibAFOEuISQKplSnxMWA/640?wx_fmt=png&wxfrom=200',
        'amount' => 40000,
        'count' => 4,
        'category_id' => ['string'],
      ],],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/servicepayondeliveryorder')->post([
  'json' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wxd678efh567hg6999',
    'service_id' => '500001',
    'service_introduction' => '某某酒店',
    'post_payments' => [[
      'name' => '就餐费用, 服务费',
      'amount' => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'time_range' => [
      'start_time' => '',
      'start_time_remark' => '',
      'end_time' => '',
      'end_time_remark' => '',
    ],
    'location' => [
      'start_location' => '',
      'end_location' => '',
    ],
    'risk_fund' => [
      'name' => 'DEPOSIT',
      'amount' => 10000,
      'description' => '就餐的预估费用',
    ],
    'attach' => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url' => 'https://api.test.com',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'need_user_confirm' => true,
    'mchid' => '1230000109',
    'shopping_info' => [
      'real_merchant_appid' => 'wxd678efh567hg6787',
      'jump_link' => [
        'jump_link_type' => 'JUMP_LINK_MINI_PROGRAM',
        'appid' => '',
        'path' => '',
      ],
      'goods' => [[
        'name' => '森海塞尔 MOMENTUM 4 无线耳机大馒头4 头戴式蓝牙音乐耳机自适应降噪',
        'picture' => 'http://mmbiz.qpic.cn/mmbiz_png/ldTw9dg46zkjOrzyTkbQAvQkysliaiblZhdthZWewgQMyqLZwStaNEsJrYmjwh2MlK7G4wibAFOEuISQKplSnxMWA/640?wx_fmt=png&wxfrom=200',
        'amount' => 40000,
        'count' => 4,
        'category_id' => ['string'],
      ],],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/servicepayondeliveryorder']->post([
  'json' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wxd678efh567hg6999',
    'service_id' => '500001',
    'service_introduction' => '某某酒店',
    'post_payments' => [[
      'name' => '就餐费用, 服务费',
      'amount' => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'time_range' => [
      'start_time' => '',
      'start_time_remark' => '',
      'end_time' => '',
      'end_time_remark' => '',
    ],
    'location' => [
      'start_location' => '',
      'end_location' => '',
    ],
    'risk_fund' => [
      'name' => 'DEPOSIT',
      'amount' => 10000,
      'description' => '就餐的预估费用',
    ],
    'attach' => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url' => 'https://api.test.com',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'need_user_confirm' => true,
    'mchid' => '1230000109',
    'shopping_info' => [
      'real_merchant_appid' => 'wxd678efh567hg6787',
      'jump_link' => [
        'jump_link_type' => 'JUMP_LINK_MINI_PROGRAM',
        'appid' => '',
        'path' => '',
      ],
      'goods' => [[
        'name' => '森海塞尔 MOMENTUM 4 无线耳机大馒头4 头戴式蓝牙音乐耳机自适应降噪',
        'picture' => 'http://mmbiz.qpic.cn/mmbiz_png/ldTw9dg46zkjOrzyTkbQAvQkysliaiblZhdthZWewgQMyqLZwStaNEsJrYmjwh2MlK7G4wibAFOEuISQKplSnxMWA/640?wx_fmt=png&wxfrom=200',
        'amount' => 40000,
        'count' => 4,
        'category_id' => ['string'],
      ],],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no | string | 商户订单号
| service_id | string | 服务ID
| appid | string | 服务商公众号ID
| mchid | string | 服务商商户号
| sub_appid | string | 子商户公众号ID
| sub_mchid | string | 子商户商户号
| service_introduction | string | 服务信息
| state | string | 服务订单状态
| state_description | string | 订单状态说明
| post_payments | object[] | 后付费项目
| name {data-indent=1} | string | 付费名称
| amount {data-indent=1} | number | 付费金额
| description {data-indent=1} | string | 付费说明
| count {data-indent=1} | number | 付费数量
| post_discounts | object[] | 商户优惠
| name {data-indent=1} | string | 优惠名称
| description {data-indent=1} | string | 优惠说明
| amount {data-indent=1} | number | 优惠金额
| count {data-indent=1} | number | 优惠数量
| risk_fund | object | 服务风险金
| name {data-indent=1} | string | 风险名称
| amount {data-indent=1} | number | 风险金额
| description {data-indent=1} | string | 风险说明
| time_range | object | 服务时间
| start_time {data-indent=1} | string | 服务开始时间
| end_time {data-indent=1} | string | 服务结束时间
| start_time_remark {data-indent=1} | string | 服务开始时间备注
| end_time_remark {data-indent=1} | string | 服务结束时间备注
| location | object | 服务位置
| start_location {data-indent=1} | string | 服务开始地点
| end_location {data-indent=1} | string | 服务结束地点
| attach | string | 附加数据
| notify_url | string | 商户回调地址
| order_id | string | 微信支付服务订单号
| package | string | 跳转微信侧数据包
| shopping_info | object | 先用后付购物详情
| real_merchant_appid {data-indent=1} | string | 实际购物商家公众号ID
| jump_link {data-indent=1} | object | 单详跳转链接
| jump_link_type {data-indent=2} | string | 跳转链接类型
| appid {data-indent=2} | string | 小程序跳转AppID
| path {data-indent=2} | string | 小程序跳转path
| goods {data-indent=1} | object[] | 商品列表
| name {data-indent=2} | string | 商品名称
| picture {data-indent=2} | string | 商品图片链接
| amount {data-indent=2} | number | 商品单价金额
| count {data-indent=2} | number | 商品数量
| category_id {data-indent=2} | string[] | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-order/create-partner-pay-on-delivery-service-order.html)
