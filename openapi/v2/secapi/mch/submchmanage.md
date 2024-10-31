---
title: 银行特约商户录入/银行特约商户资料查询
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| appid {data-indent=1} | string | 公众账号ID
| mch_id {data-indent=1} | string | 商户号
| merchant_name {data-indent=1} | string | 商户名称
| sub_mch_id {data-indent=1} | string | 商户识别码
| page_index {data-indent=1} | string | 页码
| page_size {data-indent=1} | string | 展示资料个数
| nonceless | boolean | 声明请求的`XML`无随机字符串参数<br/>固定值`true`
| security | boolean | 声明加载商户API证书<br/>固定值`true`
| query | object | 声明请求的查询参数
| action {data-indent=1} | string | `add` \| `query` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->mch->submchmanage->postAsync([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'merchant_name' => '商户名称',
    'sub_mch_id' => '1230000109',
    'page_index' => '1',
    'page_size' => '10',
  ],
  'nonceless' => true,
  'security' => true,
  'query' => [
    'action' => 'add',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/mch/submchmanage')->postAsync([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'merchant_name' => '商户名称',
    'sub_mch_id' => '1230000109',
    'page_index' => '1',
    'page_size' => '10',
  ],
  'nonceless' => true,
  'security' => true,
  'query' => [
    'action' => 'add',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/mch/submchmanage']->postAsync([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'merchant_name' => '商户名称',
    'sub_mch_id' => '1230000109',
    'page_index' => '1',
    'page_size' => '10',
  ],
  'nonceless' => true,
  'security' => true,
  'query' => [
    'action' => 'add',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->mch->submchmanage->post([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'merchant_name' => '商户名称',
    'sub_mch_id' => '1230000109',
    'page_index' => '1',
    'page_size' => '10',
  ],
  'nonceless' => true,
  'security' => true,
  'query' => [
    'action' => 'add',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/mch/submchmanage')->post([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'merchant_name' => '商户名称',
    'sub_mch_id' => '1230000109',
    'page_index' => '1',
    'page_size' => '10',
  ],
  'nonceless' => true,
  'security' => true,
  'query' => [
    'action' => 'add',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/mch/submchmanage']->post([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'merchant_name' => '商户名称',
    'sub_mch_id' => '1230000109',
    'page_index' => '1',
    'page_size' => '10',
  ],
  'nonceless' => true,
  'security' => true,
  'query' => [
    'action' => 'add',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| appid | string | 公众账号ID
| mch_id | string | 商户号
| merchant_name | string | 商户名称
| merchant_shortname | string | 商户简称
| service_phone | string | 客服电话
| contact | string | 联系人
| contact_phone | string | 联系电话
| contact_email | string | 联系邮箱
| business | string | 经营类目
| channel_id | string | 渠道商商户号
| channel_name | string | 渠道商名称
| total | string | 总记录数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/mch_bank.php?chapter=9_22&index=3&p=9)
