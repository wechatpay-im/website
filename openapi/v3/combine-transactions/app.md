---
title: 合单下单-APP支付
description: 使用合单支付接口，用户只输入一次密码，即可完成多个订单的支付。目前最多一次可支持50笔订单进行合单支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| combine_appid {data-required data-indent=1} | string | 合单商户appid
| combine_mchid {data-required data-indent=1} | string | 合单商户号
| combine_out_trade_no {data-required data-indent=1} | string | 合单商户订单号
| scene_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 场景信息
| device_id {data-indent=2} | string | 商户端设备号
| payer_client_ip {data-required data-indent=2} | string | 用户终端IP
| sub_orders {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商品单信息
| mchid {data-required data-indent=2} | string | 子单商户号
| individual_auth_id {data-indent=2} | string | 商品单个人收款方受理授权ID
| individual_name {data-indent=2} | string | 商品单个人收款方平台昵称
| attach {data-required data-indent=2} | string | 附加数据
| amount {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 订单金额
| total_amount {data-required data-indent=3} | integer | 标价金额
| currency {data-required data-indent=3} | string | 标价币种
| out_trade_no {data-required data-indent=2} | string | 商品单商户订单号
| sub_mchid {data-indent=2} | string | 二级商户号
| detail {data-indent=2} | string | 商品详情
| goods_tag {data-indent=2} | string | 订单优惠标记
| description {data-required data-indent=2} | string | 商品描述
| settle_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 结算信息
| profit_sharing {data-indent=3} | boolean | 是否指定分账
| subsidy_amount {data-indent=3} | integer | 补差金额
| sub_appid {data-indent=2} | string | 子商户应用ID
| combine_payer_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付者
| identity {data-indent=2} | object {data-tooltip="对应PHP的array"} | 实名支付(需单独申请权限)
| type {data-required data-indent=3} | string | 证件类型<br/>`IDCARD` 枚举值
| number {data-required data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 加密后的证件号
| name {data-required data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 加密后的姓名
| time_start {data-indent=1} | string | 交易起始时间
| time_expire {data-indent=1} | string | 交易结束时间
| prepay_id {data-indent=1} | string | 预支付交易会话标识
| notify_url {data-required data-indent=1} | string | 通知地址
| trade_scenario {data-indent=1} | string | 交易场景<br/>`RECOMMERCE` 枚举值
| limit_pay {data-indent=1} | string[] | 指定支付方式<br/>`no_balance` \| `no_debit` \| `balance_only` 枚举值之一
| contract_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 预签约信息
| mchid {data-required data-indent=2} | string | 签约商户号
| appid {data-required data-indent=2} | string | 签约商户AppID
| out_contract_code {data-required data-indent=2} | string | 签约商户协议号
| plan_id {data-required data-indent=2} | number | 委托代扣协议模板ID
| contract_display_account {data-required data-indent=2} | string | 用户账户展示名称
| notify_url {data-required data-indent=2} | string | 回调通知地址
| subsidy_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 贴息信息(微信分付)
| subsidy_detail {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 贴息详情列表
| subsidy_period_type {data-required data-indent=3} | string | 贴息方案类型<br/>`DAILY` \| `PERIOD` 枚举值之一
| subsidy_plan {data-required data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 贴息方案列表
| subsidy_installment_num {data-required data-indent=4} | integer | 贴息期数<br/>`3` \| `6` \| `12` 枚举值之一
| subsidy_percent {data-required data-indent=4} | integer | 贴息比例<br/>`0` \| `100` 枚举值之一
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->combineTransactions->app->postAsync([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'scene_info'           => [
      'device_id'       => 'POS1:1',
      'payer_client_ip' => '14.17.22.32',
    ],
    'sub_orders'           => [[
      'mchid'              => '1900000109',
      'individual_auth_id' => '1900000109',
      'individual_name'    => '哈哈哈小店',
      'attach'             => '深圳分店',
      'amount'             => [
        'total_amount' => 100,
        'currency'     => 'CNY',
      ],
      'out_trade_no'       => '20150806125346',
      'sub_mchid'          => '1900000109',
      'detail'             => '买单费用',
      'goods_tag'          => 'WXG',
      'description'        => '腾讯充值中心-QQ会员充值',
      'settle_info'        => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid'          => 'wxd678efh567hg6999',
    ],],
    'combine_payer_info'   => [
      'identity' => [
        'type'   => 'IDCARD',
        'number' => '6B46824C852FA29AAC3DCE6BFD852E27',
        'name'   => '6B46824C852FA29AAC3DCE6BFD852E27',
      ],
    ],
    'time_start'           => '2019-12-31T15:59:60+08:00',
    'time_expire'          => '2019-12-31T15:59:60+08:00',
    'prepay_id'            => 'wx201410272009395522657a690389285100',
    'notify_url'           => 'https://yourapp.com/notify',
    'trade_scenario'       => 'RECOMMERCE',
    'limit_pay'            => ['no_balance'],
    'contract_info'        => [
      'mchid'                    => '1900000109',
      'appid'                    => 'wxd678efh567hg6787',
      'out_contract_code'        => 'wxwtdk20200910100000',
      'plan_id'                  => 12535,
      'contract_display_account' => '微信代扣用户A',
      'notify_url'               => 'https://yourapp.com/notify',
    ],
    'subsidy_info'         => [
      'subsidy_detail' => [[
        'subsidy_period_type' => 'PERIOD',
        'subsidy_plan'        => [[
          'subsidy_installment_num' => 3,
          'subsidy_percent'         => 100,
        ],],
      ],],
    ],
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
$instance->chain('v3/combine-transactions/app')->postAsync([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'scene_info'           => [
      'device_id'       => 'POS1:1',
      'payer_client_ip' => '14.17.22.32',
    ],
    'sub_orders'           => [[
      'mchid'              => '1900000109',
      'individual_auth_id' => '1900000109',
      'individual_name'    => '哈哈哈小店',
      'attach'             => '深圳分店',
      'amount'             => [
        'total_amount' => 100,
        'currency'     => 'CNY',
      ],
      'out_trade_no'       => '20150806125346',
      'sub_mchid'          => '1900000109',
      'detail'             => '买单费用',
      'goods_tag'          => 'WXG',
      'description'        => '腾讯充值中心-QQ会员充值',
      'settle_info'        => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid'          => 'wxd678efh567hg6999',
    ],],
    'combine_payer_info'   => [
      'identity' => [
        'type'   => 'IDCARD',
        'number' => '6B46824C852FA29AAC3DCE6BFD852E27',
        'name'   => '6B46824C852FA29AAC3DCE6BFD852E27',
      ],
    ],
    'time_start'           => '2019-12-31T15:59:60+08:00',
    'time_expire'          => '2019-12-31T15:59:60+08:00',
    'prepay_id'            => 'wx201410272009395522657a690389285100',
    'notify_url'           => 'https://yourapp.com/notify',
    'trade_scenario'       => 'RECOMMERCE',
    'limit_pay'            => ['no_balance'],
    'contract_info'        => [
      'mchid'                    => '1900000109',
      'appid'                    => 'wxd678efh567hg6787',
      'out_contract_code'        => 'wxwtdk20200910100000',
      'plan_id'                  => 12535,
      'contract_display_account' => '微信代扣用户A',
      'notify_url'               => 'https://yourapp.com/notify',
    ],
    'subsidy_info'         => [
      'subsidy_detail' => [[
        'subsidy_period_type' => 'PERIOD',
        'subsidy_plan'        => [[
          'subsidy_installment_num' => 3,
          'subsidy_percent'         => 100,
        ],],
      ],],
    ],
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
$instance['v3/combine-transactions/app']->postAsync([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'scene_info'           => [
      'device_id'       => 'POS1:1',
      'payer_client_ip' => '14.17.22.32',
    ],
    'sub_orders'           => [[
      'mchid'              => '1900000109',
      'individual_auth_id' => '1900000109',
      'individual_name'    => '哈哈哈小店',
      'attach'             => '深圳分店',
      'amount'             => [
        'total_amount' => 100,
        'currency'     => 'CNY',
      ],
      'out_trade_no'       => '20150806125346',
      'sub_mchid'          => '1900000109',
      'detail'             => '买单费用',
      'goods_tag'          => 'WXG',
      'description'        => '腾讯充值中心-QQ会员充值',
      'settle_info'        => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid'          => 'wxd678efh567hg6999',
    ],],
    'combine_payer_info'   => [
      'identity' => [
        'type'   => 'IDCARD',
        'number' => '6B46824C852FA29AAC3DCE6BFD852E27',
        'name'   => '6B46824C852FA29AAC3DCE6BFD852E27',
      ],
    ],
    'time_start'           => '2019-12-31T15:59:60+08:00',
    'time_expire'          => '2019-12-31T15:59:60+08:00',
    'prepay_id'            => 'wx201410272009395522657a690389285100',
    'notify_url'           => 'https://yourapp.com/notify',
    'trade_scenario'       => 'RECOMMERCE',
    'limit_pay'            => ['no_balance'],
    'contract_info'        => [
      'mchid'                    => '1900000109',
      'appid'                    => 'wxd678efh567hg6787',
      'out_contract_code'        => 'wxwtdk20200910100000',
      'plan_id'                  => 12535,
      'contract_display_account' => '微信代扣用户A',
      'notify_url'               => 'https://yourapp.com/notify',
    ],
    'subsidy_info'         => [
      'subsidy_detail' => [[
        'subsidy_period_type' => 'PERIOD',
        'subsidy_plan'        => [[
          'subsidy_installment_num' => 3,
          'subsidy_percent'         => 100,
        ],],
      ],],
    ],
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
$response = $instance->v3->combineTransactions->app->post([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'scene_info'           => [
      'device_id'       => 'POS1:1',
      'payer_client_ip' => '14.17.22.32',
    ],
    'sub_orders'           => [[
      'mchid'              => '1900000109',
      'individual_auth_id' => '1900000109',
      'individual_name'    => '哈哈哈小店',
      'attach'             => '深圳分店',
      'amount'             => [
        'total_amount' => 100,
        'currency'     => 'CNY',
      ],
      'out_trade_no'       => '20150806125346',
      'sub_mchid'          => '1900000109',
      'detail'             => '买单费用',
      'goods_tag'          => 'WXG',
      'description'        => '腾讯充值中心-QQ会员充值',
      'settle_info'        => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid'          => 'wxd678efh567hg6999',
    ],],
    'combine_payer_info'   => [
      'identity' => [
        'type'   => 'IDCARD',
        'number' => '6B46824C852FA29AAC3DCE6BFD852E27',
        'name'   => '6B46824C852FA29AAC3DCE6BFD852E27',
      ],
    ],
    'time_start'           => '2019-12-31T15:59:60+08:00',
    'time_expire'          => '2019-12-31T15:59:60+08:00',
    'prepay_id'            => 'wx201410272009395522657a690389285100',
    'notify_url'           => 'https://yourapp.com/notify',
    'trade_scenario'       => 'RECOMMERCE',
    'limit_pay'            => ['no_balance'],
    'contract_info'        => [
      'mchid'                    => '1900000109',
      'appid'                    => 'wxd678efh567hg6787',
      'out_contract_code'        => 'wxwtdk20200910100000',
      'plan_id'                  => 12535,
      'contract_display_account' => '微信代扣用户A',
      'notify_url'               => 'https://yourapp.com/notify',
    ],
    'subsidy_info'         => [
      'subsidy_detail' => [[
        'subsidy_period_type' => 'PERIOD',
        'subsidy_plan'        => [[
          'subsidy_installment_num' => 3,
          'subsidy_percent'         => 100,
        ],],
      ],],
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/combine-transactions/app')->post([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'scene_info'           => [
      'device_id'       => 'POS1:1',
      'payer_client_ip' => '14.17.22.32',
    ],
    'sub_orders'           => [[
      'mchid'              => '1900000109',
      'individual_auth_id' => '1900000109',
      'individual_name'    => '哈哈哈小店',
      'attach'             => '深圳分店',
      'amount'             => [
        'total_amount' => 100,
        'currency'     => 'CNY',
      ],
      'out_trade_no'       => '20150806125346',
      'sub_mchid'          => '1900000109',
      'detail'             => '买单费用',
      'goods_tag'          => 'WXG',
      'description'        => '腾讯充值中心-QQ会员充值',
      'settle_info'        => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid'          => 'wxd678efh567hg6999',
    ],],
    'combine_payer_info'   => [
      'identity' => [
        'type'   => 'IDCARD',
        'number' => '6B46824C852FA29AAC3DCE6BFD852E27',
        'name'   => '6B46824C852FA29AAC3DCE6BFD852E27',
      ],
    ],
    'time_start'           => '2019-12-31T15:59:60+08:00',
    'time_expire'          => '2019-12-31T15:59:60+08:00',
    'prepay_id'            => 'wx201410272009395522657a690389285100',
    'notify_url'           => 'https://yourapp.com/notify',
    'trade_scenario'       => 'RECOMMERCE',
    'limit_pay'            => ['no_balance'],
    'contract_info'        => [
      'mchid'                    => '1900000109',
      'appid'                    => 'wxd678efh567hg6787',
      'out_contract_code'        => 'wxwtdk20200910100000',
      'plan_id'                  => 12535,
      'contract_display_account' => '微信代扣用户A',
      'notify_url'               => 'https://yourapp.com/notify',
    ],
    'subsidy_info'         => [
      'subsidy_detail' => [[
        'subsidy_period_type' => 'PERIOD',
        'subsidy_plan'        => [[
          'subsidy_installment_num' => 3,
          'subsidy_percent'         => 100,
        ],],
      ],],
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/combine-transactions/app']->post([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'scene_info'           => [
      'device_id'       => 'POS1:1',
      'payer_client_ip' => '14.17.22.32',
    ],
    'sub_orders'           => [[
      'mchid'              => '1900000109',
      'individual_auth_id' => '1900000109',
      'individual_name'    => '哈哈哈小店',
      'attach'             => '深圳分店',
      'amount'             => [
        'total_amount' => 100,
        'currency'     => 'CNY',
      ],
      'out_trade_no'       => '20150806125346',
      'sub_mchid'          => '1900000109',
      'detail'             => '买单费用',
      'goods_tag'          => 'WXG',
      'description'        => '腾讯充值中心-QQ会员充值',
      'settle_info'        => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid'          => 'wxd678efh567hg6999',
    ],],
    'combine_payer_info'   => [
      'identity' => [
        'type'   => 'IDCARD',
        'number' => '6B46824C852FA29AAC3DCE6BFD852E27',
        'name'   => '6B46824C852FA29AAC3DCE6BFD852E27',
      ],
    ],
    'time_start'           => '2019-12-31T15:59:60+08:00',
    'time_expire'          => '2019-12-31T15:59:60+08:00',
    'prepay_id'            => 'wx201410272009395522657a690389285100',
    'notify_url'           => 'https://yourapp.com/notify',
    'trade_scenario'       => 'RECOMMERCE',
    'limit_pay'            => ['no_balance'],
    'contract_info'        => [
      'mchid'                    => '1900000109',
      'appid'                    => 'wxd678efh567hg6787',
      'out_contract_code'        => 'wxwtdk20200910100000',
      'plan_id'                  => 12535,
      'contract_display_account' => '微信代扣用户A',
      'notify_url'               => 'https://yourapp.com/notify',
    ],
    'subsidy_info'         => [
      'subsidy_detail' => [[
        'subsidy_period_type' => 'PERIOD',
        'subsidy_plan'        => [[
          'subsidy_installment_num' => 3,
          'subsidy_percent'         => 100,
        ],],
      ],],
    ],
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
| prepay_id {data-required} | string | 预支付交易会话标识
| contract_result | object {data-tooltip="对应PHP的array"} | 预签约结果
| code {data-required data-indent=1} | string | 签约结果码
| message {data-indent=1} | string | 签约结果描述信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012556944) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012545465) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012758021) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012707307) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760622) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012884108) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015001933) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015973099)
