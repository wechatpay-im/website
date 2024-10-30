# 查询H5支付域名修改申请单 {#get}

商户可以通过该接口查询H5支付域名修改申请单。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| applyment_id | integer | 申请单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->merchant->h5->permission->domain->applications->_applyment_id_->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/merchant/h5/permission/domain/applications/{applyment_id}')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/merchant/h5/permission/domain/applications/{applyment_id}']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->merchant->h5->permission->domain->applications->_applyment_id_->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/merchant/h5/permission/domain/applications/{applyment_id}')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/merchant/h5/permission/domain/applications/{applyment_id}']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号
| website_state | string | 子商户经营网址状态
| domains | string[] | 
| webiste_url | string | 子商户H5经营网址
| website_business_page_pics | string[] | 
| website_homepage_pics | string[] | 
| applyment_id | integer | 申请单号
| audit_reject_detail | string | 驳回原因
| applyment_state | string | 申请单状态
| notify_url | string | 商户提供的审核结果回调接口
| out_applyment_id | string | 商户申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_4_5.shtml)

# 修改H5支付域名修改申请单 {#patch}

商户可以通过该接口修改已被驳回的H5支付域名修改申请单。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| applyment_id | integer | 申请单号
| json | object | 声明请求的`JSON`数据结构
| domains {data-indent=1} | string[] | H5支付域名
| website_state {data-indent=1} | string | 子商户经营网址状态
| website_url {data-indent=1} | string | 商户H5经营网址
| website_business_page_pics {data-indent=1} | string[] | 
| website_homepage_pics {data-indent=1} | string[] | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->merchant->h5->permission->domain->applications->_applyment_id_->patchAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
  'json' => [
    'domains' => [["qq.com"]],
    'website_state' => 'HAS_LAUNCHED',
    'website_url' => 'https://qq.com',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics' => ['MediaId'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/merchant/h5/permission/domain/applications/{applyment_id}')->patchAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
  'json' => [
    'domains' => [["qq.com"]],
    'website_state' => 'HAS_LAUNCHED',
    'website_url' => 'https://qq.com',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics' => ['MediaId'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/merchant/h5/permission/domain/applications/{applyment_id}']->patchAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
  'json' => [
    'domains' => [["qq.com"]],
    'website_state' => 'HAS_LAUNCHED',
    'website_url' => 'https://qq.com',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics' => ['MediaId'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->merchant->h5->permission->domain->applications->_applyment_id_->patch([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
  'json' => [
    'domains' => [["qq.com"]],
    'website_state' => 'HAS_LAUNCHED',
    'website_url' => 'https://qq.com',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics' => ['MediaId'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/merchant/h5/permission/domain/applications/{applyment_id}')->patch([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
  'json' => [
    'domains' => [["qq.com"]],
    'website_state' => 'HAS_LAUNCHED',
    'website_url' => 'https://qq.com',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics' => ['MediaId'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/merchant/h5/permission/domain/applications/{applyment_id}']->patch([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
  'json' => [
    'domains' => [["qq.com"]],
    'website_state' => 'HAS_LAUNCHED',
    'website_url' => 'https://qq.com',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics' => ['MediaId'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号
| website_state | string | 子商户经营网址状态
| domains | string[] | 
| webiste_url | string | 子商户H5经营网址
| website_business_page_pics | string[] | 
| website_homepage_pics | string[] | 
| applyment_id | integer | 申请单号
| audit_reject_detail | string | 驳回原因
| applyment_state | string | 申请单状态
| notify_url | string | 商户提供的审核结果回调接口
| out_applyment_id | string | 商户申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_4_6.shtml)