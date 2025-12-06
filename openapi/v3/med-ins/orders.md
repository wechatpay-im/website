---
title: 医保自费混合收款下单
description: 商户调用该接口向微信医保后台下单
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| mix_pay_type {data-required data-indent=1} | string | 混合支付类型<br/>`UNKNOWN_MIX_PAY_TYPE` \| `CASH_ONLY` \| `INSURANCE_ONLY` \| `CASH_AND_INSURANCE` 枚举值之一
| order_type {data-required data-indent=1} | string | 订单类型<br/>`UNKNOWN_ORDER_TYPE` \| `REG_PAY` \| `DIAG_PAY` \| `COVID_EXAM_PAY` \| `IN_HOSP_PAY` \| `PHARMACY_PAY` \| `INSURANCE_PAY` \| `INT_REG_PAY` \| `INT_RE_DIAG_PAY` \| `INT_RX_PAY` \| `COVID_ANTIGEN_PAY` \| `MED_PAY` 枚举值之一
| appid {data-required data-indent=1} | string | 从业机构的公众号ID
| sub_appid {data-indent=1} | string | 医疗机构的公众号ID
| sub_mchid {data-indent=1} | string | 医疗机构的商户号
| openid {data-indent=1} | string | 用户在appid下的唯一标识
| sub_openid {data-indent=1} | string | 用户在医疗机构AppID下的唯一标识
| payer {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付人身份信息
| name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 真实姓名
| id_digest {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 个人身份ID摘要
| card_type {data-required data-indent=2} | string | 证件类型<br/>`UNKNOWN_USER_CARD_TYPE` \| `ID_CARD` \| `HOUSEHOLD_REGISTRATION` \| `FOREIGNER_PASSPORT` \| `MAINLAND_TRAVEL_PERMIT_FOR_TW` \| `MAINLAND_TRAVEL_PERMIT_FOR_MO` \| `MAINLAND_TRAVEL_PERMIT_FOR_HK` \| `FOREIGN_PERMANENT_RESIDENT` 枚举值之一
| pay_for_relatives {data-indent=1} | boolean | 是否代亲属支付
| relative {data-indent=1} | object {data-tooltip="对应PHP的array"} | 亲属身份信息
| name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 真实姓名
| id_digest {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 个人身份ID摘要
| card_type {data-required data-indent=2} | string | 证件类型<br/>`UNKNOWN_USER_CARD_TYPE` \| `ID_CARD` \| `HOUSEHOLD_REGISTRATION` \| `FOREIGNER_PASSPORT` \| `MAINLAND_TRAVEL_PERMIT_FOR_TW` \| `MAINLAND_TRAVEL_PERMIT_FOR_MO` \| `MAINLAND_TRAVEL_PERMIT_FOR_HK` \| `FOREIGN_PERMANENT_RESIDENT` 枚举值之一
| out_trade_no {data-required data-indent=1} | string | 从业机构订单号
| serial_no {data-required data-indent=1} | string | 医疗机构订单号
| pay_order_id {data-indent=1} | string | 医保局返回的支付单ID
| pay_auth_no {data-indent=1} | string | 医保局返回的支付授权码
| geo_location {data-indent=1} | string | 用户定位信息
| city_id {data-required data-indent=1} | string | 城市ID
| med_inst_name {data-required data-indent=1} | string | 医疗机构名称
| med_inst_no {data-required data-indent=1} | string | 医疗机构编码
| med_ins_order_create_time {data-indent=1} | string | 医保下单时间
| total_fee {data-required data-indent=1} | integer | 使用该接口下单的总金额
| med_ins_gov_fee {data-indent=1} | integer | 医保局结算后，医保统筹支付金额
| med_ins_self_fee {data-indent=1} | integer | 医保局结算后，医保个账支付金额
| med_ins_other_fee {data-indent=1} | integer | 医保局结算后，医保其他支付金额
| med_ins_cash_fee {data-indent=1} | integer | 医保局结算后，需要自费的金额
| wechat_pay_cash_fee {data-indent=1} | integer | 实际需要用户微信支付的金额
| cash_add_detail {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 现金补充列表
| cash_add_fee {data-required data-indent=2} | integer | 现金补充金额
| cash_add_type {data-required data-indent=2} | string | 现金补充类型<br/>`DEFAULT_ADD_TYPE` \| `FREIGHT` \| `OTHER_MEDICAL_EXPENSES` 枚举值之一
| cash_reduce_detail {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 现金减免列表
| cash_reduce_fee {data-required data-indent=2} | integer | 现金减免金额
| cash_reduce_type {data-required data-indent=2} | string | 现金减免类型<br/>`DEFAULT_REDUCE_TYPE` \| `HOSPITAL_REDUCE` \| `PHARMACY_DISCOUNT` \| `DISCOUNT` \| `PRE_PAYMENT` \| `DEPOSIT_DEDUCTION` 枚举值之一
| callback_url {data-required data-indent=1} | string | 回调通知URL
| prepay_id {data-indent=1} | string | 自费预下单ID
| passthrough_request_content {data-indent=1} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 医疗机构透传给医保的数据
| {colspan=3 .im-table-line}
| payAuthNo {data-indent=2} | string | 
| payOrdId {data-indent=2} | string | 
| setlLatlnt {data-indent=2} | string | 
| extends {data-indent=1} | string | 扩展字段
| attach {data-indent=1} | string | 附加数据
| channel_no {data-indent=1} | string | 渠道号
| med_ins_test_env {data-indent=1} | boolean | 是否到医保局测试环境下单
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->medIns->orders->postAsync([
  'json' => [
    'mix_pay_type'                => 'CASH_AND_INSURANCE',
    'order_type'                  => 'REG_PAY',
    'appid'                       => 'wx8888888888888888',
    'sub_appid'                   => 'wxd678efh567hg6999',
    'sub_mchid'                   => '1900000109',
    'openid'                      => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'                  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'payer'                       => [
      'name'      => '',
      'id_digest' => '',
      'card_type' => 'ID_CARD',
    ],
    'pay_for_relatives'           => true,
    'relative'                    => [
      'name'      => '',
      'id_digest' => '',
      'card_type' => 'ID_CARD',
    ],
    'out_trade_no'                => '202204022005169952975171534816',
    'serial_no'                   => '1217752501201',
    'pay_order_id'                => 'ORD530100202204022006350000021',
    'pay_auth_no'                 => 'AUTH530100202204022006310000034',
    'geo_location'                => '102.682296,25.054260',
    'city_id'                     => '530100',
    'med_inst_name'               => '北大医院',
    'med_inst_no'                 => '1217752501201407033233368318',
    'med_ins_order_create_time'   => '2018-06-08T10:34:56+08:00',
    'total_fee'                   => 202000,
    'med_ins_gov_fee'             => 100000,
    'med_ins_self_fee'            => 45000,
    'med_ins_other_fee'           => 5000,
    'med_ins_cash_fee'            => 50000,
    'wechat_pay_cash_fee'         => 42000,
    'cash_add_detail'             => [[
      'cash_add_fee'  => 2000,
      'cash_add_type' => 'FREIGHT',
    ],],
    'cash_reduce_detail'          => [[
      'cash_reduce_fee'  => 10000,
      'cash_reduce_type' => 'DEFAULT_REDUCE_TYPE',
    ],],
    'callback_url'                => 'https://www.weixin.qq.com/wxpay/pay.php',
    'prepay_id'                   => 'wx201410272009395522657a690389285100',
    'passthrough_request_content' => \json_encode([
      'payAuthNo'  => 'AUTH****',
      'payOrdId'   => 'ORD****',
      'setlLatlnt' => '118.096435,24.485407',
    ]),
    'extends'                     => '{}',
    'attach'                      => '{}',
    'channel_no'                  => 'AAGN9uhZc5EGyRdairKW7Qnu',
    'med_ins_test_env'            => true,
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
$instance->chain('v3/med-ins/orders')->postAsync([
  'json' => [
    'mix_pay_type'                => 'CASH_AND_INSURANCE',
    'order_type'                  => 'REG_PAY',
    'appid'                       => 'wx8888888888888888',
    'sub_appid'                   => 'wxd678efh567hg6999',
    'sub_mchid'                   => '1900000109',
    'openid'                      => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'                  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'payer'                       => [
      'name'      => '',
      'id_digest' => '',
      'card_type' => 'ID_CARD',
    ],
    'pay_for_relatives'           => true,
    'relative'                    => [
      'name'      => '',
      'id_digest' => '',
      'card_type' => 'ID_CARD',
    ],
    'out_trade_no'                => '202204022005169952975171534816',
    'serial_no'                   => '1217752501201',
    'pay_order_id'                => 'ORD530100202204022006350000021',
    'pay_auth_no'                 => 'AUTH530100202204022006310000034',
    'geo_location'                => '102.682296,25.054260',
    'city_id'                     => '530100',
    'med_inst_name'               => '北大医院',
    'med_inst_no'                 => '1217752501201407033233368318',
    'med_ins_order_create_time'   => '2018-06-08T10:34:56+08:00',
    'total_fee'                   => 202000,
    'med_ins_gov_fee'             => 100000,
    'med_ins_self_fee'            => 45000,
    'med_ins_other_fee'           => 5000,
    'med_ins_cash_fee'            => 50000,
    'wechat_pay_cash_fee'         => 42000,
    'cash_add_detail'             => [[
      'cash_add_fee'  => 2000,
      'cash_add_type' => 'FREIGHT',
    ],],
    'cash_reduce_detail'          => [[
      'cash_reduce_fee'  => 10000,
      'cash_reduce_type' => 'DEFAULT_REDUCE_TYPE',
    ],],
    'callback_url'                => 'https://www.weixin.qq.com/wxpay/pay.php',
    'prepay_id'                   => 'wx201410272009395522657a690389285100',
    'passthrough_request_content' => \json_encode([
      'payAuthNo'  => 'AUTH****',
      'payOrdId'   => 'ORD****',
      'setlLatlnt' => '118.096435,24.485407',
    ]),
    'extends'                     => '{}',
    'attach'                      => '{}',
    'channel_no'                  => 'AAGN9uhZc5EGyRdairKW7Qnu',
    'med_ins_test_env'            => true,
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
$instance['v3/med-ins/orders']->postAsync([
  'json' => [
    'mix_pay_type'                => 'CASH_AND_INSURANCE',
    'order_type'                  => 'REG_PAY',
    'appid'                       => 'wx8888888888888888',
    'sub_appid'                   => 'wxd678efh567hg6999',
    'sub_mchid'                   => '1900000109',
    'openid'                      => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'                  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'payer'                       => [
      'name'      => '',
      'id_digest' => '',
      'card_type' => 'ID_CARD',
    ],
    'pay_for_relatives'           => true,
    'relative'                    => [
      'name'      => '',
      'id_digest' => '',
      'card_type' => 'ID_CARD',
    ],
    'out_trade_no'                => '202204022005169952975171534816',
    'serial_no'                   => '1217752501201',
    'pay_order_id'                => 'ORD530100202204022006350000021',
    'pay_auth_no'                 => 'AUTH530100202204022006310000034',
    'geo_location'                => '102.682296,25.054260',
    'city_id'                     => '530100',
    'med_inst_name'               => '北大医院',
    'med_inst_no'                 => '1217752501201407033233368318',
    'med_ins_order_create_time'   => '2018-06-08T10:34:56+08:00',
    'total_fee'                   => 202000,
    'med_ins_gov_fee'             => 100000,
    'med_ins_self_fee'            => 45000,
    'med_ins_other_fee'           => 5000,
    'med_ins_cash_fee'            => 50000,
    'wechat_pay_cash_fee'         => 42000,
    'cash_add_detail'             => [[
      'cash_add_fee'  => 2000,
      'cash_add_type' => 'FREIGHT',
    ],],
    'cash_reduce_detail'          => [[
      'cash_reduce_fee'  => 10000,
      'cash_reduce_type' => 'DEFAULT_REDUCE_TYPE',
    ],],
    'callback_url'                => 'https://www.weixin.qq.com/wxpay/pay.php',
    'prepay_id'                   => 'wx201410272009395522657a690389285100',
    'passthrough_request_content' => \json_encode([
      'payAuthNo'  => 'AUTH****',
      'payOrdId'   => 'ORD****',
      'setlLatlnt' => '118.096435,24.485407',
    ]),
    'extends'                     => '{}',
    'attach'                      => '{}',
    'channel_no'                  => 'AAGN9uhZc5EGyRdairKW7Qnu',
    'med_ins_test_env'            => true,
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
$response = $instance->v3->medIns->orders->post([
  'json' => [
    'mix_pay_type'                => 'CASH_AND_INSURANCE',
    'order_type'                  => 'REG_PAY',
    'appid'                       => 'wx8888888888888888',
    'sub_appid'                   => 'wxd678efh567hg6999',
    'sub_mchid'                   => '1900000109',
    'openid'                      => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'                  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'payer'                       => [
      'name'      => '',
      'id_digest' => '',
      'card_type' => 'ID_CARD',
    ],
    'pay_for_relatives'           => true,
    'relative'                    => [
      'name'      => '',
      'id_digest' => '',
      'card_type' => 'ID_CARD',
    ],
    'out_trade_no'                => '202204022005169952975171534816',
    'serial_no'                   => '1217752501201',
    'pay_order_id'                => 'ORD530100202204022006350000021',
    'pay_auth_no'                 => 'AUTH530100202204022006310000034',
    'geo_location'                => '102.682296,25.054260',
    'city_id'                     => '530100',
    'med_inst_name'               => '北大医院',
    'med_inst_no'                 => '1217752501201407033233368318',
    'med_ins_order_create_time'   => '2018-06-08T10:34:56+08:00',
    'total_fee'                   => 202000,
    'med_ins_gov_fee'             => 100000,
    'med_ins_self_fee'            => 45000,
    'med_ins_other_fee'           => 5000,
    'med_ins_cash_fee'            => 50000,
    'wechat_pay_cash_fee'         => 42000,
    'cash_add_detail'             => [[
      'cash_add_fee'  => 2000,
      'cash_add_type' => 'FREIGHT',
    ],],
    'cash_reduce_detail'          => [[
      'cash_reduce_fee'  => 10000,
      'cash_reduce_type' => 'DEFAULT_REDUCE_TYPE',
    ],],
    'callback_url'                => 'https://www.weixin.qq.com/wxpay/pay.php',
    'prepay_id'                   => 'wx201410272009395522657a690389285100',
    'passthrough_request_content' => \json_encode([
      'payAuthNo'  => 'AUTH****',
      'payOrdId'   => 'ORD****',
      'setlLatlnt' => '118.096435,24.485407',
    ]),
    'extends'                     => '{}',
    'attach'                      => '{}',
    'channel_no'                  => 'AAGN9uhZc5EGyRdairKW7Qnu',
    'med_ins_test_env'            => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/med-ins/orders')->post([
  'json' => [
    'mix_pay_type'                => 'CASH_AND_INSURANCE',
    'order_type'                  => 'REG_PAY',
    'appid'                       => 'wx8888888888888888',
    'sub_appid'                   => 'wxd678efh567hg6999',
    'sub_mchid'                   => '1900000109',
    'openid'                      => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'                  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'payer'                       => [
      'name'      => '',
      'id_digest' => '',
      'card_type' => 'ID_CARD',
    ],
    'pay_for_relatives'           => true,
    'relative'                    => [
      'name'      => '',
      'id_digest' => '',
      'card_type' => 'ID_CARD',
    ],
    'out_trade_no'                => '202204022005169952975171534816',
    'serial_no'                   => '1217752501201',
    'pay_order_id'                => 'ORD530100202204022006350000021',
    'pay_auth_no'                 => 'AUTH530100202204022006310000034',
    'geo_location'                => '102.682296,25.054260',
    'city_id'                     => '530100',
    'med_inst_name'               => '北大医院',
    'med_inst_no'                 => '1217752501201407033233368318',
    'med_ins_order_create_time'   => '2018-06-08T10:34:56+08:00',
    'total_fee'                   => 202000,
    'med_ins_gov_fee'             => 100000,
    'med_ins_self_fee'            => 45000,
    'med_ins_other_fee'           => 5000,
    'med_ins_cash_fee'            => 50000,
    'wechat_pay_cash_fee'         => 42000,
    'cash_add_detail'             => [[
      'cash_add_fee'  => 2000,
      'cash_add_type' => 'FREIGHT',
    ],],
    'cash_reduce_detail'          => [[
      'cash_reduce_fee'  => 10000,
      'cash_reduce_type' => 'DEFAULT_REDUCE_TYPE',
    ],],
    'callback_url'                => 'https://www.weixin.qq.com/wxpay/pay.php',
    'prepay_id'                   => 'wx201410272009395522657a690389285100',
    'passthrough_request_content' => \json_encode([
      'payAuthNo'  => 'AUTH****',
      'payOrdId'   => 'ORD****',
      'setlLatlnt' => '118.096435,24.485407',
    ]),
    'extends'                     => '{}',
    'attach'                      => '{}',
    'channel_no'                  => 'AAGN9uhZc5EGyRdairKW7Qnu',
    'med_ins_test_env'            => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/med-ins/orders']->post([
  'json' => [
    'mix_pay_type'                => 'CASH_AND_INSURANCE',
    'order_type'                  => 'REG_PAY',
    'appid'                       => 'wx8888888888888888',
    'sub_appid'                   => 'wxd678efh567hg6999',
    'sub_mchid'                   => '1900000109',
    'openid'                      => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'                  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'payer'                       => [
      'name'      => '',
      'id_digest' => '',
      'card_type' => 'ID_CARD',
    ],
    'pay_for_relatives'           => true,
    'relative'                    => [
      'name'      => '',
      'id_digest' => '',
      'card_type' => 'ID_CARD',
    ],
    'out_trade_no'                => '202204022005169952975171534816',
    'serial_no'                   => '1217752501201',
    'pay_order_id'                => 'ORD530100202204022006350000021',
    'pay_auth_no'                 => 'AUTH530100202204022006310000034',
    'geo_location'                => '102.682296,25.054260',
    'city_id'                     => '530100',
    'med_inst_name'               => '北大医院',
    'med_inst_no'                 => '1217752501201407033233368318',
    'med_ins_order_create_time'   => '2018-06-08T10:34:56+08:00',
    'total_fee'                   => 202000,
    'med_ins_gov_fee'             => 100000,
    'med_ins_self_fee'            => 45000,
    'med_ins_other_fee'           => 5000,
    'med_ins_cash_fee'            => 50000,
    'wechat_pay_cash_fee'         => 42000,
    'cash_add_detail'             => [[
      'cash_add_fee'  => 2000,
      'cash_add_type' => 'FREIGHT',
    ],],
    'cash_reduce_detail'          => [[
      'cash_reduce_fee'  => 10000,
      'cash_reduce_type' => 'DEFAULT_REDUCE_TYPE',
    ],],
    'callback_url'                => 'https://www.weixin.qq.com/wxpay/pay.php',
    'prepay_id'                   => 'wx201410272009395522657a690389285100',
    'passthrough_request_content' => \json_encode([
      'payAuthNo'  => 'AUTH****',
      'payOrdId'   => 'ORD****',
      'setlLatlnt' => '118.096435,24.485407',
    ]),
    'extends'                     => '{}',
    'attach'                      => '{}',
    'channel_no'                  => 'AAGN9uhZc5EGyRdairKW7Qnu',
    'med_ins_test_env'            => true,
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
| mix_trade_no {data-required} | string | 医保自费混合订单号
| mix_pay_status {data-required} | string | 医保自费混合订单支付状态<br/>`UNKNOWN_MIX_PAY_STATUS` \| `MIX_PAY_CREATED` \| `MIX_PAY_SUCCESS` \| `MIX_PAY_REFUND` \| `MIX_PAY_FAIL` 枚举值之一
| self_pay_status {data-required} | string | 混合订单中自费部分的支付状态<br/>`UNKNOWN_SELF_PAY_STATUS` \| `SELF_PAY_CREATED` \| `SELF_PAY_SUCCESS` \| `SELF_PAY_REFUND` \| `SELF_PAY_FAIL` \| `NO_SELF_PAY` 枚举值之一
| med_ins_pay_status {data-required} | string | 混合订单中自费部分的支付状态<br/>`UNKNOWN_MED_INS_PAY_STATUS` \| `MED_INS_PAY_CREATED` \| `MED_INS_PAY_SUCCESS` \| `MED_INS_PAY_REFUND` \| `MED_INS_PAY_FAIL` \| `NO_MED_INS_PAY` 枚举值之一
| paid_time | string | 订单支付时间
| passthrough_response_content | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 支付完成后医保局返回内容
| {colspan=3 .im-table-line}
| payAuthNo {data-indent=1} | string | 
| payOrdId {data-indent=1} | string | 
| setlLatlnt {data-indent=1} | string | 
| mix_pay_type {data-required} | string | 混合支付类型<br/>`UNKNOWN_MIX_PAY_TYPE` \| `CASH_ONLY` \| `INSURANCE_ONLY` \| `CASH_AND_INSURANCE` 枚举值之一
| order_type {data-required} | string | 订单类型<br/>`UNKNOWN_ORDER_TYPE` \| `REG_PAY` \| `DIAG_PAY` \| `COVID_EXAM_PAY` \| `IN_HOSP_PAY` \| `PHARMACY_PAY` \| `INSURANCE_PAY` \| `INT_REG_PAY` \| `INT_RE_DIAG_PAY` \| `INT_RX_PAY` \| `COVID_ANTIGEN_PAY` \| `MED_PAY` 枚举值之一
| appid {data-required} | string | 从业机构的公众号ID
| sub_appid | string | 医疗机构的公众号ID
| sub_mchid | string | 医疗机构的商户号
| openid | string | 用户在appid下的唯一标识
| sub_openid | string | 用户在医疗机构AppID下的唯一标识
| pay_for_relatives | boolean | 是否代亲属支付
| out_trade_no {data-required} | string | 从业机构订单号
| serial_no {data-required} | string | 医疗机构订单号
| pay_order_id | string | 医保局返回的支付单ID
| pay_auth_no | string | 医保局返回的支付授权码
| geo_location | string | 用户定位信息
| city_id {data-required} | string | 城市ID
| med_inst_name {data-required} | string | 医疗机构名称
| med_inst_no {data-required} | string | 医疗机构编码
| med_ins_order_create_time | string | 医保下单时间
| total_fee {data-required} | integer | 使用该接口下单的总金额
| med_ins_gov_fee | integer | 医保局结算后，医保统筹支付金额
| med_ins_self_fee | integer | 医保局结算后，医保个账支付金额
| med_ins_other_fee | integer | 医保局结算后，医保其他支付金额
| med_ins_cash_fee | integer | 医保局结算后，需要自费的金额
| wechat_pay_cash_fee | integer | 实际需要用户微信支付的金额
| cash_add_detail | object[] {data-tooltip="对应PHP的array"} | 现金补充列表
| cash_add_fee {data-required data-indent=1} | integer | 现金补充金额
| cash_add_type {data-required data-indent=1} | string | 现金补充类型<br/>`DEFAULT_ADD_TYPE` \| `FREIGHT` \| `OTHER_MEDICAL_EXPENSES` 枚举值之一
| cash_reduce_detail | object[] {data-tooltip="对应PHP的array"} | 现金减免列表
| cash_reduce_fee {data-required data-indent=1} | integer | 现金减免金额
| cash_reduce_type {data-required data-indent=1} | string | 现金减免类型<br/>`DEFAULT_REDUCE_TYPE` \| `HOSPITAL_REDUCE` \| `PHARMACY_DISCOUNT` \| `DISCOUNT` \| `PRE_PAYMENT` \| `DEPOSIT_DEDUCTION` 枚举值之一
| callback_url {data-required} | string | 回调通知URL
| prepay_id | string | 自费预下单ID
| passthrough_request_content | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 医疗机构透传给医保的数据
| {colspan=3 .im-table-line}
| payAuthNo {data-indent=1} | string | 
| payOrdId {data-indent=1} | string | 
| setlLatlnt {data-indent=1} | string | 
| extends | string | 扩展字段
| attach | string | 附加数据
| channel_no | string | 渠道号
| med_ins_test_env | boolean | 是否到医保局测试环境下单

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4016781466) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012503131)
