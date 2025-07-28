---
title: 预核销品类凭证码
description: 预核销品类凭证码
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_serial_no {data-required data-indent=1} | string | 接入方请求流水号
| mchnt_no {data-required data-indent=1} | string | 商户号
| term_no {data-required data-indent=1} | string | 终端号
| auth_code {data-required data-indent=1} | string | 品类凭证码
| category {data-required data-indent=1} | string | 品类编码
| county_code {data-required data-indent=1} | string | 区县编码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->zhejiang->authcode->try->postAsync([
  'json' => [
    'sp_serial_no' => '',
    'mchnt_no'     => '',
    'term_no'      => '',
    'auth_code'    => '',
    'category'     => 'A01',
    'county_code'  => '330000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/zhejiang/authcode/try')->postAsync([
  'json' => [
    'sp_serial_no' => '',
    'mchnt_no'     => '',
    'term_no'      => '',
    'auth_code'    => '',
    'category'     => 'A01',
    'county_code'  => '330000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/zhejiang/authcode/try']->postAsync([
  'json' => [
    'sp_serial_no' => '',
    'mchnt_no'     => '',
    'term_no'      => '',
    'auth_code'    => '',
    'category'     => 'A01',
    'county_code'  => '330000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->zhejiang->authcode->try->post([
  'json' => [
    'sp_serial_no' => '',
    'mchnt_no'     => '',
    'term_no'      => '',
    'auth_code'    => '',
    'category'     => 'A01',
    'county_code'  => '330000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/zhejiang/authcode/try')->post([
  'json' => [
    'sp_serial_no' => '',
    'mchnt_no'     => '',
    'term_no'      => '',
    'auth_code'    => '',
    'category'     => 'A01',
    'county_code'  => '330000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/zhejiang/authcode/try']->post([
  'json' => [
    'sp_serial_no' => '',
    'mchnt_no'     => '',
    'term_no'      => '',
    'auth_code'    => '',
    'category'     => 'A01',
    'county_code'  => '330000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| resp_code {data-required} | string | 响应码
| resp_desc {data-required} | string | 响应描述
| cred_frozen_no {data-required} | string | 冻结流水号
| event_id {data-required} | string | 活动号
| event_title {data-required} | string | 活动标题
| discount_mode {data-required} | number | 优惠模式<br/>`DIS_FLAG` \| `DIS_CALC` \| `DIS_SMKT` 枚举值之一
| amount | number | 原订单金额
| discount_amt | number | 优惠金额
| pay_amt | number | 实付金额
| channel_dis_flag | string | 渠道优惠标记
| channel_evt_no | string | 渠道活动号列表
| category_id {data-required} | string | 品类编码

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989530)
