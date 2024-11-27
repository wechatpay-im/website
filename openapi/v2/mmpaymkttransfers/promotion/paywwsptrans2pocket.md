---
title: 向员工付款
description: 给同一个实名用户付款，单笔单日限额200/200元；一个商户同一日付款总额限额10W；不支持给非实名用户打款；单笔最小金额默认为1元。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号appid
| mch_id {data-required data-indent=1} | string | 商户号
| device_info {data-indent=1} | string | 设备号
| nonce_str {data-required data-indent=1} | string | 随机字符串
| partner_trade_no {data-required data-indent=1} | string | 商户订单号
| openid {data-required data-indent=1} | string | 用户openid
| check_name {data-required data-indent=1} | string | 校验用户姓名选项<br/>`FORCE_CHECK` 枚举值
| re_user_name {data-indent=1} | string | 收款用户姓名
| amount {data-required data-indent=1} | integer | 金额
| desc {data-required data-indent=1} | string | 企业付款备注
| spbill_create_ip {data-required data-indent=1} | string | Ip地址
| workwx_sign {data-indent=1} | string | 企业微信签名
| ww_msg_type {data-indent=1} | string | 付款消息类型<br/>`NORMAL_MSG` \| `APPROVAL_MSG` 枚举值之一
| approval_number {data-indent=1} | string | 审批单号
| approval_type {data-indent=1} | number | 审批类型<br/>`1` 枚举值
| act_name {data-indent=1} | string | 项目名称
| agentid {data-indent=1} | string | 付款的应用id

{.im-table #request}

::: code-group

```php [异步纯链式]
$workwxSign = \strtoupper(
  \WeChatPay\Crypto\Hash::md5(
    \WeChatPay\Formatter::queryStringLike(
        \WeChatPay\Formatter::ksort([
          'amount'           => '10099',
          'appid'            => 'wx8888888888888888',
          'desc'             => '六月出差报销费用',
          'mch_id'           => '1900000109',
          'nonce_str'        => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
          'openid'           => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
          'partner_trade_no' => '10000098201411111234567890',
          'ww_msg_type'      => 'NORMAL_MSG',
        ])
    ),
    $agentSecret, //应用的secret字符串
    '1' //应用agentid字符串
  )
);
$instance->v2->mmpaymkttransfers->promotion->paywwsptrans2pocket->postAsync([
  'security' => true,
  'xml' => [
    'appid'            => 'wx8888888888888888',
    'mch_id'           => '1900000109',
    'device_info'      => '013467007045764',
    'nonce_str'        => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    'partner_trade_no' => '10000098201411111234567890',
    'openid'           => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'check_name'       => 'FORCE_CHECK',
    're_user_name'     => '王小王',
    'amount'           => '10099',
    'desc'             => '六月出差报销费用',
    'spbill_create_ip' => '192.168.0.1',
    'workwx_sign'      => $workwxSign,
    'ww_msg_type'      => 'NORMAL_MSG',
    'approval_number'  => '201705160008',
    'approval_type'    => '1',
    'act_name'         => '产品部门报销',
    'agentid'          => '1',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$workwxSign = \strtoupper(
  \WeChatPay\Crypto\Hash::md5(
    \WeChatPay\Formatter::queryStringLike(
        \WeChatPay\Formatter::ksort([
          'amount'           => '10099',
          'appid'            => 'wx8888888888888888',
          'desc'             => '六月出差报销费用',
          'mch_id'           => '1900000109',
          'nonce_str'        => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
          'openid'           => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
          'partner_trade_no' => '10000098201411111234567890',
          'ww_msg_type'      => 'NORMAL_MSG',
        ])
    ),
    $agentSecret, //应用的secret字符串
    '1' //应用agentid字符串
  )
);
$instance->chain('v2/mmpaymkttransfers/promotion/paywwsptrans2pocket')->postAsync([
  'security' => true,
  'xml' => [
    'appid'            => 'wx8888888888888888',
    'mch_id'           => '1900000109',
    'device_info'      => '013467007045764',
    'nonce_str'        => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    'partner_trade_no' => '10000098201411111234567890',
    'openid'           => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'check_name'       => 'FORCE_CHECK',
    're_user_name'     => '王小王',
    'amount'           => '10099',
    'desc'             => '六月出差报销费用',
    'spbill_create_ip' => '192.168.0.1',
    'workwx_sign'      => $workwxSign,
    'ww_msg_type'      => 'NORMAL_MSG',
    'approval_number'  => '201705160008',
    'approval_type'    => '1',
    'act_name'         => '产品部门报销',
    'agentid'          => '1',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$workwxSign = \strtoupper(
  \WeChatPay\Crypto\Hash::md5(
    \WeChatPay\Formatter::queryStringLike(
        \WeChatPay\Formatter::ksort([
          'amount'           => '10099',
          'appid'            => 'wx8888888888888888',
          'desc'             => '六月出差报销费用',
          'mch_id'           => '1900000109',
          'nonce_str'        => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
          'openid'           => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
          'partner_trade_no' => '10000098201411111234567890',
          'ww_msg_type'      => 'NORMAL_MSG',
        ])
    ),
    $agentSecret, //应用的secret字符串
    '1' //应用agentid字符串
  )
);
$instance['v2/mmpaymkttransfers/promotion/paywwsptrans2pocket']->postAsync([
  'security' => true,
  'xml' => [
    'appid'            => 'wx8888888888888888',
    'mch_id'           => '1900000109',
    'device_info'      => '013467007045764',
    'nonce_str'        => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    'partner_trade_no' => '10000098201411111234567890',
    'openid'           => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'check_name'       => 'FORCE_CHECK',
    're_user_name'     => '王小王',
    'amount'           => '10099',
    'desc'             => '六月出差报销费用',
    'spbill_create_ip' => '192.168.0.1',
    'workwx_sign'      => $workwxSign,
    'ww_msg_type'      => 'NORMAL_MSG',
    'approval_number'  => '201705160008',
    'approval_type'    => '1',
    'act_name'         => '产品部门报销',
    'agentid'          => '1',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$workwxSign = \strtoupper(
  \WeChatPay\Crypto\Hash::md5(
    \WeChatPay\Formatter::queryStringLike(
        \WeChatPay\Formatter::ksort([
          'amount'           => '10099',
          'appid'            => 'wx8888888888888888',
          'desc'             => '六月出差报销费用',
          'mch_id'           => '1900000109',
          'nonce_str'        => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
          'openid'           => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
          'partner_trade_no' => '10000098201411111234567890',
          'ww_msg_type'      => 'NORMAL_MSG',
        ])
    ),
    $agentSecret, //应用的secret字符串
    '1' //应用agentid字符串
  )
);
$response = $instance->v2->mmpaymkttransfers->promotion->paywwsptrans2pocket->post([
  'security' => true,
  'xml' => [
    'appid'            => 'wx8888888888888888',
    'mch_id'           => '1900000109',
    'device_info'      => '013467007045764',
    'nonce_str'        => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    'partner_trade_no' => '10000098201411111234567890',
    'openid'           => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'check_name'       => 'FORCE_CHECK',
    're_user_name'     => '王小王',
    'amount'           => '10099',
    'desc'             => '六月出差报销费用',
    'spbill_create_ip' => '192.168.0.1',
    'workwx_sign'      => $workwxSign,
    'ww_msg_type'      => 'NORMAL_MSG',
    'approval_number'  => '201705160008',
    'approval_type'    => '1',
    'act_name'         => '产品部门报销',
    'agentid'          => '1',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$workwxSign = \strtoupper(
  \WeChatPay\Crypto\Hash::md5(
    \WeChatPay\Formatter::queryStringLike(
        \WeChatPay\Formatter::ksort([
          'amount'           => '10099',
          'appid'            => 'wx8888888888888888',
          'desc'             => '六月出差报销费用',
          'mch_id'           => '1900000109',
          'nonce_str'        => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
          'openid'           => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
          'partner_trade_no' => '10000098201411111234567890',
          'ww_msg_type'      => 'NORMAL_MSG',
        ])
    ),
    $agentSecret, //应用的secret字符串
    '1' //应用agentid字符串
  )
);
$response = $instance->chain('v2/mmpaymkttransfers/promotion/paywwsptrans2pocket')->post([
  'security' => true,
  'xml' => [
    'appid'            => 'wx8888888888888888',
    'mch_id'           => '1900000109',
    'device_info'      => '013467007045764',
    'nonce_str'        => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    'partner_trade_no' => '10000098201411111234567890',
    'openid'           => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'check_name'       => 'FORCE_CHECK',
    're_user_name'     => '王小王',
    'amount'           => '10099',
    'desc'             => '六月出差报销费用',
    'spbill_create_ip' => '192.168.0.1',
    'workwx_sign'      => $workwxSign,
    'ww_msg_type'      => 'NORMAL_MSG',
    'approval_number'  => '201705160008',
    'approval_type'    => '1',
    'act_name'         => '产品部门报销',
    'agentid'          => '1',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$workwxSign = \strtoupper(
  \WeChatPay\Crypto\Hash::md5(
    \WeChatPay\Formatter::queryStringLike(
        \WeChatPay\Formatter::ksort([
          'amount'           => '10099',
          'appid'            => 'wx8888888888888888',
          'desc'             => '六月出差报销费用',
          'mch_id'           => '1900000109',
          'nonce_str'        => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
          'openid'           => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
          'partner_trade_no' => '10000098201411111234567890',
          'ww_msg_type'      => 'NORMAL_MSG',
        ])
    ),
    $agentSecret, //应用的secret字符串
    '1' //应用agentid字符串
  )
);
$response = $instance['v2/mmpaymkttransfers/promotion/paywwsptrans2pocket']->post([
  'security' => true,
  'xml' => [
    'appid'            => 'wx8888888888888888',
    'mch_id'           => '1900000109',
    'device_info'      => '013467007045764',
    'nonce_str'        => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    'partner_trade_no' => '10000098201411111234567890',
    'openid'           => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'check_name'       => 'FORCE_CHECK',
    're_user_name'     => '王小王',
    'amount'           => '10099',
    'desc'             => '六月出差报销费用',
    'spbill_create_ip' => '192.168.0.1',
    'workwx_sign'      => $workwxSign,
    'ww_msg_type'      => 'NORMAL_MSG',
    'approval_number'  => '201705160008',
    'approval_type'    => '1',
    'act_name'         => '产品部门报销',
    'agentid'          => '1',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| appid | string | 公众账号appid
| mch_id | string | 商户号
| device_info | string | 设备号
| nonce_str | string | 随机字符串
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| partner_trade_no {data-required} | string | 商户订单号
| payment_no {data-required} | string | 微信付款单号
| payment_time {data-required} | string | 付款成功时间

{.im-table #response}

参阅 [官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90278)
