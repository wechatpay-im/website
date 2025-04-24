---
title: 品牌商户发放红包
description: 普通直连商户可以通过该接口，向多个用户发放品牌红包，微信支付视任何不同“发起的普通直连商户商户号+商家品牌红包批次单号（out_batch_no）”的请求为一个全新的批次。在未查询到明确的品牌红包批次单处理结果之前，请勿修改商家品牌红包批次单号重新提交！如有发生，普通直连商户应当自行承担因此产生的所有损失和责任。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | number | 品牌ID
| brand_appid {data-required data-indent=1} | string | 品牌AppID
| scene {data-required data-indent=1} | string | 品牌红包发放场景<br/>`CUSTOM_SEND` 枚举值
| template_id {data-required data-indent=1} | string | 品牌红包模板ID
| out_batch_no {data-required data-indent=1} | string | 商家品牌红包批次单号
| batch_name {data-required data-indent=1} | string | 品牌红包批次名称
| batch_remark {data-required data-indent=1} | string | 品牌红包批次备注
| total_amount {data-required data-indent=1} | number | 总金额
| total_num {data-required data-indent=1} | number | 总笔数
| detail_list {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 品牌红包明细列表
| out_detail_no {data-required data-indent=2} | string | 商家品牌红包明细单号
| amount {data-required data-indent=2} | number | 红包金额（单位：分）
| openid {data-required data-indent=2} | string | 接收红包用户OpenID
| user_name {data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 接收红包用户姓名
| remark {data-required data-indent=2} | string | 红包备注
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->brandRedpacket->brandMerchantBatches->postAsync([
  'json' => [
    'brand_id'     => 1234,
    'brand_appid'  => 'wxf636efh567hg4356',
    'scene'        => 'CUSTOM_SEND',
    'template_id'  => '123400001',
    'out_batch_no' => 'plfk2020042013',
    'batch_name'   => '双十一营销用品牌红包',
    'batch_remark' => '双十一营销用品牌红包',
    'total_amount' => 10000,
    'total_num'    => 10,
    'detail_list'  => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'amount'        => 100,
      'openid'        => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name'     => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'remark'        => '来自XX的红包',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/brand-redpacket/brand-merchant-batches')->postAsync([
  'json' => [
    'brand_id'     => 1234,
    'brand_appid'  => 'wxf636efh567hg4356',
    'scene'        => 'CUSTOM_SEND',
    'template_id'  => '123400001',
    'out_batch_no' => 'plfk2020042013',
    'batch_name'   => '双十一营销用品牌红包',
    'batch_remark' => '双十一营销用品牌红包',
    'total_amount' => 10000,
    'total_num'    => 10,
    'detail_list'  => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'amount'        => 100,
      'openid'        => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name'     => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'remark'        => '来自XX的红包',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/brand-redpacket/brand-merchant-batches']->postAsync([
  'json' => [
    'brand_id'     => 1234,
    'brand_appid'  => 'wxf636efh567hg4356',
    'scene'        => 'CUSTOM_SEND',
    'template_id'  => '123400001',
    'out_batch_no' => 'plfk2020042013',
    'batch_name'   => '双十一营销用品牌红包',
    'batch_remark' => '双十一营销用品牌红包',
    'total_amount' => 10000,
    'total_num'    => 10,
    'detail_list'  => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'amount'        => 100,
      'openid'        => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name'     => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'remark'        => '来自XX的红包',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->brandRedpacket->brandMerchantBatches->post([
  'json' => [
    'brand_id'     => 1234,
    'brand_appid'  => 'wxf636efh567hg4356',
    'scene'        => 'CUSTOM_SEND',
    'template_id'  => '123400001',
    'out_batch_no' => 'plfk2020042013',
    'batch_name'   => '双十一营销用品牌红包',
    'batch_remark' => '双十一营销用品牌红包',
    'total_amount' => 10000,
    'total_num'    => 10,
    'detail_list'  => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'amount'        => 100,
      'openid'        => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name'     => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'remark'        => '来自XX的红包',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/brand-redpacket/brand-merchant-batches')->post([
  'json' => [
    'brand_id'     => 1234,
    'brand_appid'  => 'wxf636efh567hg4356',
    'scene'        => 'CUSTOM_SEND',
    'template_id'  => '123400001',
    'out_batch_no' => 'plfk2020042013',
    'batch_name'   => '双十一营销用品牌红包',
    'batch_remark' => '双十一营销用品牌红包',
    'total_amount' => 10000,
    'total_num'    => 10,
    'detail_list'  => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'amount'        => 100,
      'openid'        => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name'     => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'remark'        => '来自XX的红包',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/brand-redpacket/brand-merchant-batches']->post([
  'json' => [
    'brand_id'     => 1234,
    'brand_appid'  => 'wxf636efh567hg4356',
    'scene'        => 'CUSTOM_SEND',
    'template_id'  => '123400001',
    'out_batch_no' => 'plfk2020042013',
    'batch_name'   => '双十一营销用品牌红包',
    'batch_remark' => '双十一营销用品牌红包',
    'total_amount' => 10000,
    'total_num'    => 10,
    'detail_list'  => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'amount'        => 100,
      'openid'        => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name'     => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'remark'        => '来自XX的红包',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no {data-required} | string | 商家品牌红包批次单号
| batch_no | string | 微信支付品牌红包批次单号
| create_time {data-required} | string | 品牌红包批次创建时间
| batch_state | string | 批次单状态<br/>`WAIT_PAY` \| `ACCEPTED` \| `PROCESSING` \| `FINISHED` \| `CLOSED` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4014310358)
