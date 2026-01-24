---
title: 上传保单
description: 在用户完成授权后（商户可通过授权完成回调通知或主动调用查询授权信息接口确认授权状态），商户通过此接口将保单的详细信息同步至微信支付平台。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_insurance_no {data-required data-indent=1} | string | 商户保险编号
| insured_name_list {data-required data-indent=1} | string[] | 被保险人姓名列表
| insurance_company_code {data-required data-indent=1} | string | 承保公司代码
| effective_time {data-required data-indent=1} | string | 保单生效时间
| expired_time {data-required data-indent=1} | string | 保单失效时间
| coverage_detail {data-required data-indent=1} | string | 保障详情
| support_renewal {data-required data-indent=1} | boolean | 是否支持续保
| start_renewal_time {data-indent=1} | string | 可续保开始时间
| end_renewal_time {data-indent=1} | string | 可续保结束时间
| policy_type {data-required data-indent=1} | string | 保单类型<br/>`POLICY_TYPE_OTHER` \| `POLICY_TYPE_MEDICAL` \| `POLICY_TYPE_ACCIDENT` \| `POLICY_TYPE_CRITICAL` \| `POLICY_TYPE_CAR` \| `POLICY_TYPE_LIFE` \| `POLICY_TYPE_PROPERTY` \| `POLICY_TYPE_PET` \| `POLICY_TYPE_ANNUITY` 枚举值之一
| car_number {data-indent=1} | string | 车牌信息
| pet_name {data-indent=1} | string | 宠物名称
| address {data-indent=1} | string | 地址信息
| policy_state {data-required data-indent=1} | string | 保单状态<br/>`POLICY_STATE_ISSUING` \| `POLICY_STATE_APPROVED` \| `POLICY_STATE_DECLINED` \| `POLICY_STATE_INACTIVE` 枚举值之一
| policy_code {data-indent=1} | string | 保司保单号
| plan_id {data-required data-indent=1} | number | 委托代扣模板ID
| out_contract_code {data-required data-indent=1} | string | 商户签约协议号
| policy_periods {data-required data-indent=1} | number[] | 保单的扣费周期列表
| appid {data-required data-indent=1} | string | 商户APPID
| openid {data-required data-indent=1} | string | 用户在商户公众号内的身份标识
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->inspolicymgr->deduct->policies->postAsync([
  'json' => [
    'out_insurance_no'       => 'Auisihsiahishishi4hihsid123418id',
    'insured_name_list'      => ['tCk1JSUV2QUlCQURBTkJna3Foa2lHOXc'],
    'insurance_company_code' => '1001',
    'effective_time'         => '2025-09-21T17:11:12+08:00',
    'expired_time'           => '2025-09-21T17:11:12+08:00',
    'coverage_detail'        => '可保190种疾病，确诊一次性赔付',
    'support_renewal'        => true,
    'start_renewal_time'     => '2025-09-21T17:11:12+08:00',
    'end_renewal_time'       => '2025-09-21T17:11:12+08:00',
    'policy_type'            => 'POLICY_TYPE_OTHER',
    'car_number'             => '粤B·AB123',
    'pet_name'               => '小狗',
    'address'                => '上海市浦东新区晨晖路1001号',
    'policy_state'           => 'POLICY_STATE_ISSUING',
    'policy_code'            => 'Coisihsiaxishishi4hihsid1ii411co',
    'plan_id'                => 12535,
    'out_contract_code'      => 'wxwtdk20200910100000',
    'policy_periods'         => [1],
    'appid'                  => 'wxd678efh567hg6787',
    'openid'                 => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
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
$instance->chain('v3/inspolicymgr/deduct/policies')->postAsync([
  'json' => [
    'out_insurance_no'       => 'Auisihsiahishishi4hihsid123418id',
    'insured_name_list'      => ['tCk1JSUV2QUlCQURBTkJna3Foa2lHOXc'],
    'insurance_company_code' => '1001',
    'effective_time'         => '2025-09-21T17:11:12+08:00',
    'expired_time'           => '2025-09-21T17:11:12+08:00',
    'coverage_detail'        => '可保190种疾病，确诊一次性赔付',
    'support_renewal'        => true,
    'start_renewal_time'     => '2025-09-21T17:11:12+08:00',
    'end_renewal_time'       => '2025-09-21T17:11:12+08:00',
    'policy_type'            => 'POLICY_TYPE_OTHER',
    'car_number'             => '粤B·AB123',
    'pet_name'               => '小狗',
    'address'                => '上海市浦东新区晨晖路1001号',
    'policy_state'           => 'POLICY_STATE_ISSUING',
    'policy_code'            => 'Coisihsiaxishishi4hihsid1ii411co',
    'plan_id'                => 12535,
    'out_contract_code'      => 'wxwtdk20200910100000',
    'policy_periods'         => [1],
    'appid'                  => 'wxd678efh567hg6787',
    'openid'                 => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
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
$instance['v3/inspolicymgr/deduct/policies']->postAsync([
  'json' => [
    'out_insurance_no'       => 'Auisihsiahishishi4hihsid123418id',
    'insured_name_list'      => ['tCk1JSUV2QUlCQURBTkJna3Foa2lHOXc'],
    'insurance_company_code' => '1001',
    'effective_time'         => '2025-09-21T17:11:12+08:00',
    'expired_time'           => '2025-09-21T17:11:12+08:00',
    'coverage_detail'        => '可保190种疾病，确诊一次性赔付',
    'support_renewal'        => true,
    'start_renewal_time'     => '2025-09-21T17:11:12+08:00',
    'end_renewal_time'       => '2025-09-21T17:11:12+08:00',
    'policy_type'            => 'POLICY_TYPE_OTHER',
    'car_number'             => '粤B·AB123',
    'pet_name'               => '小狗',
    'address'                => '上海市浦东新区晨晖路1001号',
    'policy_state'           => 'POLICY_STATE_ISSUING',
    'policy_code'            => 'Coisihsiaxishishi4hihsid1ii411co',
    'plan_id'                => 12535,
    'out_contract_code'      => 'wxwtdk20200910100000',
    'policy_periods'         => [1],
    'appid'                  => 'wxd678efh567hg6787',
    'openid'                 => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
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
$response = $instance->v3->inspolicymgr->deduct->policies->post([
  'json' => [
    'out_insurance_no'       => 'Auisihsiahishishi4hihsid123418id',
    'insured_name_list'      => ['tCk1JSUV2QUlCQURBTkJna3Foa2lHOXc'],
    'insurance_company_code' => '1001',
    'effective_time'         => '2025-09-21T17:11:12+08:00',
    'expired_time'           => '2025-09-21T17:11:12+08:00',
    'coverage_detail'        => '可保190种疾病，确诊一次性赔付',
    'support_renewal'        => true,
    'start_renewal_time'     => '2025-09-21T17:11:12+08:00',
    'end_renewal_time'       => '2025-09-21T17:11:12+08:00',
    'policy_type'            => 'POLICY_TYPE_OTHER',
    'car_number'             => '粤B·AB123',
    'pet_name'               => '小狗',
    'address'                => '上海市浦东新区晨晖路1001号',
    'policy_state'           => 'POLICY_STATE_ISSUING',
    'policy_code'            => 'Coisihsiaxishishi4hihsid1ii411co',
    'plan_id'                => 12535,
    'out_contract_code'      => 'wxwtdk20200910100000',
    'policy_periods'         => [1],
    'appid'                  => 'wxd678efh567hg6787',
    'openid'                 => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/inspolicymgr/deduct/policies')->post([
  'json' => [
    'out_insurance_no'       => 'Auisihsiahishishi4hihsid123418id',
    'insured_name_list'      => ['tCk1JSUV2QUlCQURBTkJna3Foa2lHOXc'],
    'insurance_company_code' => '1001',
    'effective_time'         => '2025-09-21T17:11:12+08:00',
    'expired_time'           => '2025-09-21T17:11:12+08:00',
    'coverage_detail'        => '可保190种疾病，确诊一次性赔付',
    'support_renewal'        => true,
    'start_renewal_time'     => '2025-09-21T17:11:12+08:00',
    'end_renewal_time'       => '2025-09-21T17:11:12+08:00',
    'policy_type'            => 'POLICY_TYPE_OTHER',
    'car_number'             => '粤B·AB123',
    'pet_name'               => '小狗',
    'address'                => '上海市浦东新区晨晖路1001号',
    'policy_state'           => 'POLICY_STATE_ISSUING',
    'policy_code'            => 'Coisihsiaxishishi4hihsid1ii411co',
    'plan_id'                => 12535,
    'out_contract_code'      => 'wxwtdk20200910100000',
    'policy_periods'         => [1],
    'appid'                  => 'wxd678efh567hg6787',
    'openid'                 => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/inspolicymgr/deduct/policies']->post([
  'json' => [
    'out_insurance_no'       => 'Auisihsiahishishi4hihsid123418id',
    'insured_name_list'      => ['tCk1JSUV2QUlCQURBTkJna3Foa2lHOXc'],
    'insurance_company_code' => '1001',
    'effective_time'         => '2025-09-21T17:11:12+08:00',
    'expired_time'           => '2025-09-21T17:11:12+08:00',
    'coverage_detail'        => '可保190种疾病，确诊一次性赔付',
    'support_renewal'        => true,
    'start_renewal_time'     => '2025-09-21T17:11:12+08:00',
    'end_renewal_time'       => '2025-09-21T17:11:12+08:00',
    'policy_type'            => 'POLICY_TYPE_OTHER',
    'car_number'             => '粤B·AB123',
    'pet_name'               => '小狗',
    'address'                => '上海市浦东新区晨晖路1001号',
    'policy_state'           => 'POLICY_STATE_ISSUING',
    'policy_code'            => 'Coisihsiaxishishi4hihsid1ii411co',
    'plan_id'                => 12535,
    'out_contract_code'      => 'wxwtdk20200910100000',
    'policy_periods'         => [1],
    'appid'                  => 'wxd678efh567hg6787',
    'openid'                 => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
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
| out_insurance_no {data-required} | string | 商户保险编号
| insurance_name {data-required} | string | 保险名称
| insured_name_list {data-required} | string[] | 被保险人姓名列表
| insurance_company_code {data-required} | string | 承保公司代码
| effective_time {data-required} | string | 保单生效时间
| expired_time {data-required} | string | 保单失效时间
| coverage_detail {data-required} | string | 保障详情
| support_renewal {data-required} | boolean | 是否支持续保
| start_renewal_time | string | 可续保开始时间
| end_renewal_time | string | 可续保结束时间
| policy_type {data-required} | string | 保单类型<br/>`POLICY_TYPE_OTHER` \| `POLICY_TYPE_MEDICAL` \| `POLICY_TYPE_ACCIDENT` \| `POLICY_TYPE_CRITICAL` \| `POLICY_TYPE_CAR` \| `POLICY_TYPE_LIFE` \| `POLICY_TYPE_PROPERTY` \| `POLICY_TYPE_PET` \| `POLICY_TYPE_ANNUITY` 枚举值之一
| car_number | string | 车牌信息
| pet_name | string | 宠物名称
| address | string | 地址信息
| policy_state {data-required} | string | 保单状态<br/>`POLICY_STATE_ISSUING` \| `POLICY_STATE_APPROVED` \| `POLICY_STATE_DECLINED` \| `POLICY_STATE_INACTIVE` 枚举值之一
| policy_code | string | 保司保单号
| plan_id {data-required} | number | 委托代扣模板ID
| out_contract_code {data-required} | string | 商户签约协议号
| policy_periods {data-required} | number[] | 保单的扣费周期列表

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4016617421)
