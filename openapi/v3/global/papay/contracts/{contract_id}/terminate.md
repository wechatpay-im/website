---
title: 申请解约
description: 商户与用户的签约关系有误或者商户主动要求与用户之前的签约协议时可调用此接口完成解约。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| contract_id {data-required} | string | 委托代扣协议ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 机构APPID
| sp_appid {data-indent=1} | string | 机构appid
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| termination_note {data-indent=1} | string | 解约备注

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->papay->contracts->_contract_id_->terminate->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'contract_id' => '100005698',
  'json' => [
    'appid'            => 'wxd678efh567hg6787',
    'sp_appid'         => 'wx8888888888888888',
    'sub_mchid'        => '1230000109',
    'sub_appid'        => 'wxcbda96de0b165484',
    'termination_note' => '解约原因',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/papay/contracts/{contract_id}/terminate')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'contract_id' => '100005698',
  'json' => [
    'appid'            => 'wxd678efh567hg6787',
    'sp_appid'         => 'wx8888888888888888',
    'sub_mchid'        => '1230000109',
    'sub_appid'        => 'wxcbda96de0b165484',
    'termination_note' => '解约原因',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/global/papay/contracts/{contract_id}/terminate']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'contract_id' => '100005698',
  'json' => [
    'appid'            => 'wxd678efh567hg6787',
    'sp_appid'         => 'wx8888888888888888',
    'sub_mchid'        => '1230000109',
    'sub_appid'        => 'wxcbda96de0b165484',
    'termination_note' => '解约原因',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->papay->contracts->_contract_id_->terminate->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'contract_id' => '100005698',
  'json' => [
    'appid'            => 'wxd678efh567hg6787',
    'sp_appid'         => 'wx8888888888888888',
    'sub_mchid'        => '1230000109',
    'sub_appid'        => 'wxcbda96de0b165484',
    'termination_note' => '解约原因',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/global/papay/contracts/{contract_id}/terminate')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'contract_id' => '100005698',
  'json' => [
    'appid'            => 'wxd678efh567hg6787',
    'sp_appid'         => 'wx8888888888888888',
    'sub_mchid'        => '1230000109',
    'sub_appid'        => 'wxcbda96de0b165484',
    'termination_note' => '解约原因',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/global/papay/contracts/{contract_id}/terminate']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'contract_id' => '100005698',
  'json' => [
    'appid'            => 'wxd678efh567hg6787',
    'sp_appid'         => 'wx8888888888888888',
    'sub_mchid'        => '1230000109',
    'sub_appid'        => 'wxcbda96de0b165484',
    'termination_note' => '解约原因',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4013015478)
