---
title: 发起转账
description: 服务商商户可通过此接口申请创建转账单
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| appid {data-required data-indent=1} | string | 商户AppID
| out_bill_no {data-required data-indent=1} | string | 商户单号
| openid {data-required data-indent=1} | string | 收款用户OpenID
| user_name {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 收款用户姓名
| transfer_amount {data-required data-indent=1} | number | 转账金额
| transfer_remark {data-required data-indent=1} | string | 转账备注
| notify_url {data-indent=1} | string | 通知地址
| user_recv_perception {data-indent=1} | string | 用户收款感知
| transfer_scene_id {data-required data-indent=1} | string | 转账场景ID<br/>`1000` \| `1002` \| `1004` \| `1005` \| `1009` \| `1010` \| `1011` \| `1013` 枚举值之一
| transfer_scene_report_infos {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 转账场景报备信息
| info_type {data-required data-indent=2} | string | 信息类型
| info_content {data-required data-indent=2} | string | 信息内容
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->transferBills->postAsync([
  'json' => [
    'sub_mchid'                   => '1900001121',
    'appid'                       => 'wxf636efh567hg4356',
    'out_bill_no'                 => 'plfk2020042013',
    'openid'                      => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_name'                   => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount'             => 400000,
    'transfer_remark'             => '2020年4月报销',
    'notify_url'                  => 'https://www.weixin.qq.com/wxpay/pay.php',
    'user_recv_perception'        => '现金奖励',
    'transfer_scene_id'           => '1000',
    'transfer_scene_report_infos' => [[
      'info_type'    => '活动名称',
      'info_content' => '注册会员有礼',
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
$instance->chain('v3/fund-app/mch-transfer/partner/transfer-bills')->postAsync([
  'json' => [
    'sub_mchid'                   => '1900001121',
    'appid'                       => 'wxf636efh567hg4356',
    'out_bill_no'                 => 'plfk2020042013',
    'openid'                      => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_name'                   => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount'             => 400000,
    'transfer_remark'             => '2020年4月报销',
    'notify_url'                  => 'https://www.weixin.qq.com/wxpay/pay.php',
    'user_recv_perception'        => '现金奖励',
    'transfer_scene_id'           => '1000',
    'transfer_scene_report_infos' => [[
      'info_type'    => '活动名称',
      'info_content' => '注册会员有礼',
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
$instance['v3/fund-app/mch-transfer/partner/transfer-bills']->postAsync([
  'json' => [
    'sub_mchid'                   => '1900001121',
    'appid'                       => 'wxf636efh567hg4356',
    'out_bill_no'                 => 'plfk2020042013',
    'openid'                      => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_name'                   => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount'             => 400000,
    'transfer_remark'             => '2020年4月报销',
    'notify_url'                  => 'https://www.weixin.qq.com/wxpay/pay.php',
    'user_recv_perception'        => '现金奖励',
    'transfer_scene_id'           => '1000',
    'transfer_scene_report_infos' => [[
      'info_type'    => '活动名称',
      'info_content' => '注册会员有礼',
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
$response = $instance->v3->fundApp->mchTransfer->partner->transferBills->post([
  'json' => [
    'sub_mchid'                   => '1900001121',
    'appid'                       => 'wxf636efh567hg4356',
    'out_bill_no'                 => 'plfk2020042013',
    'openid'                      => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_name'                   => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount'             => 400000,
    'transfer_remark'             => '2020年4月报销',
    'notify_url'                  => 'https://www.weixin.qq.com/wxpay/pay.php',
    'user_recv_perception'        => '现金奖励',
    'transfer_scene_id'           => '1000',
    'transfer_scene_report_infos' => [[
      'info_type'    => '活动名称',
      'info_content' => '注册会员有礼',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/transfer-bills')->post([
  'json' => [
    'sub_mchid'                   => '1900001121',
    'appid'                       => 'wxf636efh567hg4356',
    'out_bill_no'                 => 'plfk2020042013',
    'openid'                      => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_name'                   => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount'             => 400000,
    'transfer_remark'             => '2020年4月报销',
    'notify_url'                  => 'https://www.weixin.qq.com/wxpay/pay.php',
    'user_recv_perception'        => '现金奖励',
    'transfer_scene_id'           => '1000',
    'transfer_scene_report_infos' => [[
      'info_type'    => '活动名称',
      'info_content' => '注册会员有礼',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/transfer-bills']->post([
  'json' => [
    'sub_mchid'                   => '1900001121',
    'appid'                       => 'wxf636efh567hg4356',
    'out_bill_no'                 => 'plfk2020042013',
    'openid'                      => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_name'                   => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount'             => 400000,
    'transfer_remark'             => '2020年4月报销',
    'notify_url'                  => 'https://www.weixin.qq.com/wxpay/pay.php',
    'user_recv_perception'        => '现金奖励',
    'transfer_scene_id'           => '1000',
    'transfer_scene_report_infos' => [[
      'info_type'    => '活动名称',
      'info_content' => '注册会员有礼',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

::: tip 转账场景ID(`transfer_scene_id`) 及 转账场景报备信息(`transfer_scene_report_infos`) 有如下固定搭配组合要求:
:::

::: code-group

```php [1000(现金营销)]
'transfer_scene_id'           => '1000', // 现金营销
'transfer_scene_report_infos' => [       // 固定传两组
  [
    'info_type'    => '活动名称',   // 固定值
    'info_content' => '新会员有礼', // 示例值
  ],
  [
    'info_type'    => '奖励说明',   // 固定值
    'info_content' => '抽奖一等奖', // 示例值
  ],
],
```

```php [1002(行政补贴)]
'transfer_scene_id'           => '1002', // 行政补贴
'transfer_scene_report_infos' => [       // 固定传一组
  [
    'info_type'    => '补贴类型', // 固定值
    'info_content' => '购车补贴', // 示例值
  ],
],
```

```php [1004(保险理赔)]
'transfer_scene_id'           => '1004', // 保险理赔
'transfer_scene_report_infos' => [       // 固定传三组
  [
    'info_type'    => '保险产品备案编号', // 固定值
    'info_content' => '01212121212',   // 示例值
  ],
  [
    'info_type'    => '保险名称', // 固定值
    'info_content' => '意外险',  // 示例值
  ],
  [
    'info_type'    => '保险操作单号',  // 固定值
    'info_content' => '12121245442', // 示例值
  ],
],
```

```php [1005(佣金报酬)]
'transfer_scene_id'           => '1005', // 佣金报酬
'transfer_scene_report_infos' => [       // 固定传两组
  [
    'info_type'    => '岗位类型', // 固定值
    'info_content' => '外卖员',  // 示例值
  ],
  [
    'info_type'    => '报酬说明',    // 固定值
    'info_content' => '7月份配送费', // 示例值
  ],
],
```

```php [1009(采购货款)]
'transfer_scene_id'           => '1009', // 采购货款
'transfer_scene_report_infos' => [       // 固定传一组
  [
    'info_type'    => '采购商品名称',   // 固定值
    'info_content' => '戴尔笔记本电脑', // 示例值
  ],
],
```

```php [1010(二手回收)]
'transfer_scene_id'           => '1010', // 二手回收
'transfer_scene_report_infos' => [       // 固定传一组
  [
    'info_type'    => '回收商品名称', // 固定值
    'info_content' => '塑料瓶',      // 示例值
  ],
],
```

```php [1011(企业赔付)]
'transfer_scene_id'           => '1011', // 企业赔付
'transfer_scene_report_infos' => [       // 固定传一组
  [
    'info_type'    => '赔付原因',        // 固定值
    'info_content' => '商品质量问题退款', // 示例值
  ],
],
```

```php [1013(公益补助)]
'transfer_scene_id'           => '1013', // 公益补助
'transfer_scene_report_infos' => [       // 固定传两组
  [
    'info_type'    => '公益活动名称',      // 固定值
    'info_content' => '在民政部的备案名称', // 示例值
  ],
  [
    'info_type'    => '公益活动备案编号',   // 固定值
    'info_content' => '在民政部的备案编号', // 示例值
  ],
],
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| out_bill_no {data-required} | string | 商户单号
| transfer_bill_no {data-required} | string | 微信转账单号
| create_time {data-required} | string | 单据创建时间
| package_info {data-required} | string | 跳转领取页面的package信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015469096)
