---
title: 创建H5支付域名修改申请单
description: 商户可以通过该接口为自身和子商户发起H5支付域名修改申请。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| domains {data-required data-indent=1} | string[] | H5支付域名
| website_url {data-required data-indent=1} | string | 子商户H5经营网址
| website_business_page_pics {data-indent=1} | string[] | 经营网址商业页面截图
| website_homepage_pics {data-indent=1} | string[] | 经营网址首页截图
| website_state {data-indent=1} | string | 子商户经营网址状态<br/>`HAS_LAUNCHED` \| `UN_LAUNCHED` 枚举值之一
| notify_url {data-indent=1} | string | 商户提供的审核结果回调接口
| out_applyment_id {data-required data-indent=1} | string | 商户申请单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->merchant->h5->permission->domain->applications->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid'                  => '2491935631',
    'domains'                    => ['string'],
    'website_url'                => 'https://qq.com',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics'      => ['MediaId'],
    'website_state'              => 'HAS_LAUNCHED',
    'notify_url'                 => 'https://pay.weixin.qq.com/wxpay/pay.action',
    'out_applyment_id'           => '123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/merchant/h5/permission/domain/applications')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid'                  => '2491935631',
    'domains'                    => ['string'],
    'website_url'                => 'https://qq.com',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics'      => ['MediaId'],
    'website_state'              => 'HAS_LAUNCHED',
    'notify_url'                 => 'https://pay.weixin.qq.com/wxpay/pay.action',
    'out_applyment_id'           => '123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/merchant/h5/permission/domain/applications']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid'                  => '2491935631',
    'domains'                    => ['string'],
    'website_url'                => 'https://qq.com',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics'      => ['MediaId'],
    'website_state'              => 'HAS_LAUNCHED',
    'notify_url'                 => 'https://pay.weixin.qq.com/wxpay/pay.action',
    'out_applyment_id'           => '123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->merchant->h5->permission->domain->applications->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid'                  => '2491935631',
    'domains'                    => ['string'],
    'website_url'                => 'https://qq.com',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics'      => ['MediaId'],
    'website_state'              => 'HAS_LAUNCHED',
    'notify_url'                 => 'https://pay.weixin.qq.com/wxpay/pay.action',
    'out_applyment_id'           => '123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/merchant/h5/permission/domain/applications')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid'                  => '2491935631',
    'domains'                    => ['string'],
    'website_url'                => 'https://qq.com',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics'      => ['MediaId'],
    'website_state'              => 'HAS_LAUNCHED',
    'notify_url'                 => 'https://pay.weixin.qq.com/wxpay/pay.action',
    'out_applyment_id'           => '123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/merchant/h5/permission/domain/applications']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid'                  => '2491935631',
    'domains'                    => ['string'],
    'website_url'                => 'https://qq.com',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics'      => ['MediaId'],
    'website_state'              => 'HAS_LAUNCHED',
    'notify_url'                 => 'https://pay.weixin.qq.com/wxpay/pay.action',
    'out_applyment_id'           => '123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 子商户号
| website_state {data-required} | string | 子商户经营网址状态<br/>`HAS_LAUNCHED` \| `UN_LAUNCHED` 枚举值之一
| domains {data-required} | string[] | H5支付域名
| webiste_url {data-required} | string | 子商户H5经营网址
| website_business_page_pics | string[] | 经营网址商业页面截图
| website_homepage_pics | string[] | 经营网址首页截图
| applyment_id {data-required} | integer | 申请单号
| audit_reject_detail | string | 驳回原因
| applyment_state | string | 申请单状态<br/>`PENDING` \| `UNDER_REVIEW` \| `APPROVED` \| `REJECTED` 枚举值之一
| notify_url | string | 商户提供的审核结果回调接口
| out_applyment_id {data-required} | string | 商户申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_4_4.shtml)
