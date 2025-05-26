---
title: 支付中签约
description: 通过此接口在支付的同时完成扣费服务的签约
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 请求appid
| mch_id {data-required data-indent=1} | string | 商户号
| contract_mchid {data-required data-indent=1} | string | 签约商户号
| contract_appid {data-required data-indent=1} | string | 签约appid
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| device_info {data-indent=1} | string | 设备号
| body {data-required data-indent=1} | string | 商品描述
| detail {data-indent=1} | string | 商品详情
| attach {data-indent=1} | string | 附加数据
| notify_url {data-required data-indent=1} | string | 回调通知ur
| total_fee {data-required data-indent=1} | integer | 总金额
| spbill_create_ip {data-required data-indent=1} | string | 终端IP
| time_start {data-indent=1} | string | 交易起始时间
| time_expire {data-indent=1} | string | 交易结束时间
| goods_tag {data-indent=1} | string | 商品标记
| trade_type {data-required data-indent=1} | string | 交易类型
| product_id {data-indent=1} | string | 商品ID
| limit_pay {data-indent=1} | string | 指定支付方式
| openid {data-indent=1} | string | 用户标识
| plan_id {data-required data-indent=1} | integer | 模板id
| contract_code {data-required data-indent=1} | string | 签约协议号
| contract_display_account {data-required data-indent=1} | string | 用户账户展示名称
| contract_notify_url {data-required data-indent=1} | string | 签约信息通知url

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->contractorder->postAsync([
  'xml' => [
    'appid'                    => 'wxcbda96de0b165486',
    'mch_id'                   => '1200009811',
    'contract_mchid'           => '1200009811',
    'contract_appid'           => 'wxcbda96de0b165486',
    'out_trade_no'             => '123456',
    'device_info'              => '013467007045764',
    'body'                     => 'Ipadmini16G白色',
    'detail'                   => 'Ipadmini16G白色',
    'attach'                   => '深圳分店',
    'notify_url'               => 'http://yoursite.com',
    'total_fee'                => '888',
    'spbill_create_ip'         => '123.12.12.123',
    'time_start'               => '20091225091010',
    'time_expire'              => '20091227091010',
    'goods_tag'                => 'WXG',
    'trade_type'               => 'JSAPI',
    'product_id'               => '12235413214070356458058',
    'limit_pay'                => 'no_credit',
    'openid'                   => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'plan_id'                  => '123',
    'contract_code'            => '100001256',
    'contract_display_account' => '123',
    'contract_notify_url'      => 'http://yoursite.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/contractorder')->postAsync([
  'xml' => [
    'appid'                    => 'wxcbda96de0b165486',
    'mch_id'                   => '1200009811',
    'contract_mchid'           => '1200009811',
    'contract_appid'           => 'wxcbda96de0b165486',
    'out_trade_no'             => '123456',
    'device_info'              => '013467007045764',
    'body'                     => 'Ipadmini16G白色',
    'detail'                   => 'Ipadmini16G白色',
    'attach'                   => '深圳分店',
    'notify_url'               => 'http://yoursite.com',
    'total_fee'                => '888',
    'spbill_create_ip'         => '123.12.12.123',
    'time_start'               => '20091225091010',
    'time_expire'              => '20091227091010',
    'goods_tag'                => 'WXG',
    'trade_type'               => 'JSAPI',
    'product_id'               => '12235413214070356458058',
    'limit_pay'                => 'no_credit',
    'openid'                   => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'plan_id'                  => '123',
    'contract_code'            => '100001256',
    'contract_display_account' => '123',
    'contract_notify_url'      => 'http://yoursite.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/contractorder']->postAsync([
  'xml' => [
    'appid'                    => 'wxcbda96de0b165486',
    'mch_id'                   => '1200009811',
    'contract_mchid'           => '1200009811',
    'contract_appid'           => 'wxcbda96de0b165486',
    'out_trade_no'             => '123456',
    'device_info'              => '013467007045764',
    'body'                     => 'Ipadmini16G白色',
    'detail'                   => 'Ipadmini16G白色',
    'attach'                   => '深圳分店',
    'notify_url'               => 'http://yoursite.com',
    'total_fee'                => '888',
    'spbill_create_ip'         => '123.12.12.123',
    'time_start'               => '20091225091010',
    'time_expire'              => '20091227091010',
    'goods_tag'                => 'WXG',
    'trade_type'               => 'JSAPI',
    'product_id'               => '12235413214070356458058',
    'limit_pay'                => 'no_credit',
    'openid'                   => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'plan_id'                  => '123',
    'contract_code'            => '100001256',
    'contract_display_account' => '123',
    'contract_notify_url'      => 'http://yoursite.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->contractorder->post([
  'xml' => [
    'appid'                    => 'wxcbda96de0b165486',
    'mch_id'                   => '1200009811',
    'contract_mchid'           => '1200009811',
    'contract_appid'           => 'wxcbda96de0b165486',
    'out_trade_no'             => '123456',
    'device_info'              => '013467007045764',
    'body'                     => 'Ipadmini16G白色',
    'detail'                   => 'Ipadmini16G白色',
    'attach'                   => '深圳分店',
    'notify_url'               => 'http://yoursite.com',
    'total_fee'                => '888',
    'spbill_create_ip'         => '123.12.12.123',
    'time_start'               => '20091225091010',
    'time_expire'              => '20091227091010',
    'goods_tag'                => 'WXG',
    'trade_type'               => 'JSAPI',
    'product_id'               => '12235413214070356458058',
    'limit_pay'                => 'no_credit',
    'openid'                   => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'plan_id'                  => '123',
    'contract_code'            => '100001256',
    'contract_display_account' => '123',
    'contract_notify_url'      => 'http://yoursite.com',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/contractorder')->post([
  'xml' => [
    'appid'                    => 'wxcbda96de0b165486',
    'mch_id'                   => '1200009811',
    'contract_mchid'           => '1200009811',
    'contract_appid'           => 'wxcbda96de0b165486',
    'out_trade_no'             => '123456',
    'device_info'              => '013467007045764',
    'body'                     => 'Ipadmini16G白色',
    'detail'                   => 'Ipadmini16G白色',
    'attach'                   => '深圳分店',
    'notify_url'               => 'http://yoursite.com',
    'total_fee'                => '888',
    'spbill_create_ip'         => '123.12.12.123',
    'time_start'               => '20091225091010',
    'time_expire'              => '20091227091010',
    'goods_tag'                => 'WXG',
    'trade_type'               => 'JSAPI',
    'product_id'               => '12235413214070356458058',
    'limit_pay'                => 'no_credit',
    'openid'                   => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'plan_id'                  => '123',
    'contract_code'            => '100001256',
    'contract_display_account' => '123',
    'contract_notify_url'      => 'http://yoursite.com',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/contractorder']->post([
  'xml' => [
    'appid'                    => 'wxcbda96de0b165486',
    'mch_id'                   => '1200009811',
    'contract_mchid'           => '1200009811',
    'contract_appid'           => 'wxcbda96de0b165486',
    'out_trade_no'             => '123456',
    'device_info'              => '013467007045764',
    'body'                     => 'Ipadmini16G白色',
    'detail'                   => 'Ipadmini16G白色',
    'attach'                   => '深圳分店',
    'notify_url'               => 'http://yoursite.com',
    'total_fee'                => '888',
    'spbill_create_ip'         => '123.12.12.123',
    'time_start'               => '20091225091010',
    'time_expire'              => '20091227091010',
    'goods_tag'                => 'WXG',
    'trade_type'               => 'JSAPI',
    'product_id'               => '12235413214070356458058',
    'limit_pay'                => 'no_credit',
    'openid'                   => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'plan_id'                  => '123',
    'contract_code'            => '100001256',
    'contract_display_account' => '123',
    'contract_notify_url'      => 'http://yoursite.com',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| appid {data-required} | string | 公众账号id
| mch_id {data-required} | string | 商户号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| contract_result_code {data-required} | string | 预签约结果
| contract_err_code | string | 预签约错误代码
| contract_err_code_des | string | 预签约错误描述
| prepay_id {data-required} | string | 预支付交易会话标识
| trade_type {data-required} | string | 交易类型
| code_url | string | 二维码链接
| plan_id | integer | 模板id
| request_serial | string | 请求序列号
| contract_code | string | 签约协议号
| contract_display_account | string | 用户账户展示名称
| mweb_url | string | 支付跳转链接
| out_trade_no {data-required} | string | 商户订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011987320)
