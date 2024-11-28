---
title: 商户协议号查询签约
description: 查询签约关系接口提供单笔签约关系查询， 查询方式：plan_id + out_contract_no模式：传入模板ID和委托代扣协议号进行查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| out_contract_code {data-required} | string | 签约协议号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-indent=1} | string | 机构APPID
| sub_mchid {data-indent=1} | string | 子商户号
| sp_appid {data-indent=1} | string | 机构appid
| sp_mchid {data-indent=1} | string | 机构商户号
| sub_appid {data-indent=1} | string | 子商户应用ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->papay->contracts->outContractCode->_out_contract_code_->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'out_contract_code' => '100005698',
  'query' => [
    'appid'     => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'sp_appid'  => 'wx8888888888888888',
    'sp_mchid'  => '3200000001',
    'sub_appid' => 'wxcbda96de0b165484',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/papay/contracts/out-contract-code/{out_contract_code}')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'out_contract_code' => '100005698',
  'query' => [
    'appid'     => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'sp_appid'  => 'wx8888888888888888',
    'sp_mchid'  => '3200000001',
    'sub_appid' => 'wxcbda96de0b165484',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/papay/contracts/out-contract-code/{out_contract_code}']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'out_contract_code' => '100005698',
  'query' => [
    'appid'     => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'sp_appid'  => 'wx8888888888888888',
    'sp_mchid'  => '3200000001',
    'sub_appid' => 'wxcbda96de0b165484',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->papay->contracts->outContractCode->_out_contract_code_->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'out_contract_code' => '100005698',
  'query' => [
    'appid'     => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'sp_appid'  => 'wx8888888888888888',
    'sp_mchid'  => '3200000001',
    'sub_appid' => 'wxcbda96de0b165484',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/papay/contracts/out-contract-code/{out_contract_code}')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'out_contract_code' => '100005698',
  'query' => [
    'appid'     => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'sp_appid'  => 'wx8888888888888888',
    'sp_mchid'  => '3200000001',
    'sub_appid' => 'wxcbda96de0b165484',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/papay/contracts/out-contract-code/{out_contract_code}']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'out_contract_code' => '100005698',
  'query' => [
    'appid'     => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'sp_appid'  => 'wx8888888888888888',
    'sp_mchid'  => '3200000001',
    'sub_appid' => 'wxcbda96de0b165484',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid | string | 商户号
| appid | string | 机构APPID
| sp_mchid | string | 机构商户号
| sub_mchid | string | 子商户号
| sp_appid | string | 机构appid
| sub_appid | string | 子商户应用ID
| contract_id | string | 委托代扣协议ID
| plan_id | integer | 模板ID
| out_contract_code | string | 商户侧签约协议号
| user_display_name | string | 用户账户展示名称
| state | string | 协议状态
| signed_time | string | 协议签署时间
| terminated_time | string | 协议签署时间
| termination_mode | string | 协议解约方式
| termination_note | string | 解约备注
| openid | string | 商户appid下的用户标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter5_1_3.shtml)
