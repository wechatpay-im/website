---
title: 查询分账接收方添加结果
description: 商户发起添加分账接收方请求后，可通过调用本API来查询分账接收方添加结果。只有当微信审核接收方材料通过，接收方关系状态扭转为EFFECTIVE后，才允许调用请求分账API接口来分给该接收方。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| account {data-required} | string | 接收方账号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户号
| transaction_id {data-indent=1} | string | 微信订单号
| appid {data-indent=1} | string | 应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| type {data-indent=1} | string | 分账接收方类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->profitSharing->receivers->_account_->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'account' => '86693852',
  'query' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888889',
    'type'           => 'MERCHANT_ID',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/profit-sharing/receivers/{account}')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'account' => '86693852',
  'query' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888889',
    'type'           => 'MERCHANT_ID',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/profit-sharing/receivers/{account}']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'account' => '86693852',
  'query' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888889',
    'type'           => 'MERCHANT_ID',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->profitSharing->receivers->_account_->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'account' => '86693852',
  'query' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888889',
    'type'           => 'MERCHANT_ID',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/profit-sharing/receivers/{account}')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'account' => '86693852',
  'query' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888889',
    'type'           => 'MERCHANT_ID',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/profit-sharing/receivers/{account}']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'account' => '86693852',
  'query' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888889',
    'type'           => 'MERCHANT_ID',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号
| type {data-required} | string | 分账接收方类型
| account {data-required} | string | 分账接收方账号
| name | string | 分账接收方全称
| relation_type {data-required} | string | 与分账方的关系类型
| custom_relation | string | 自定义的分账关系
| scene | string | 分账场景详细描述
| major_service | string | 接收方商户的主营业务范围
| expected_ratio | integer | 分账接收方预计分账比例
| file_id | string | 微信文件标识ID
| state | string | 接收方关系状态
| fail_reason | string | 接收关系添加失败原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_1_7.shtml)
