# 查询H5支付权限申请单详情 {#get}

商户可以通过该接口查询已经创建的H5支付申请单。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| applyment_id | integer | 申请单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->merchant->h5->permission->applications->_applyment_id_->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/merchant/h5/permission/applications/{applyment_id}')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/merchant/h5/permission/applications/{applyment_id}']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->merchant->h5->permission->applications->_applyment_id_->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/merchant/h5/permission/applications/{applyment_id}')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/merchant/h5/permission/applications/{applyment_id}']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号
| domains | string[] | 
| business_description | string | 公司介绍和业务描述
| transaction_limit_type | string | 限额类型
| company_register_cert | string | 公司注册资质证书
| website_business_page_pics | string[] | 
| website_homepage_pics | string[] | 
| website_state | string | 子商户经营网址状态
| website_url | string | 子商户H5经营网址
| applyment_id | integer | 申请单号
| audit_reject_detail | string | 驳回原因
| applyment_state | string | 申请单状态
| applyment_type | string | 申请单类型
| notify_url | string | 商户提供的审核结果回调接口

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_4_2.shtml)

# 修改H5支付权限申请单 {#patch}

商户可以通过该接口修改已经被驳回H5支付申请单。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| applyment_id | integer | 申请单号
| json | object | 声明请求的`JSON`数据结构
| domains {data-indent=1} | string[] | 
| business_description {data-indent=1} | string | 公司介绍和业务描述
| company_register_cert {data-indent=1} | string | 公司注册资质证书
| website_business_page_pics {data-indent=1} | string[] | 
| website_homepage_pics {data-indent=1} | string[] | 
| website_state {data-indent=1} | string | 子商户经营网址状态
| website_url {data-indent=1} | string | 子商户H5经营网址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->merchant->h5->permission->applications->_applyment_id_->patchAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
  'json' => [
    'domains' => ['string'],
    'business_description' => '腾讯于1998年11月成立，是一家互联网公司，通过技术丰富互联网用户的生活，助力企业数字化升级。我们的使命是“用户为本 科技向善”',
    'company_register_cert' => '6uqyGjvHzOhsLleGFQVRF',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics' => ['MediaId'],
    'website_state' => 'HAS_LAUNCHED',
    'website_url' => 'https://qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/merchant/h5/permission/applications/{applyment_id}')->patchAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
  'json' => [
    'domains' => ['string'],
    'business_description' => '腾讯于1998年11月成立，是一家互联网公司，通过技术丰富互联网用户的生活，助力企业数字化升级。我们的使命是“用户为本 科技向善”',
    'company_register_cert' => '6uqyGjvHzOhsLleGFQVRF',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics' => ['MediaId'],
    'website_state' => 'HAS_LAUNCHED',
    'website_url' => 'https://qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/merchant/h5/permission/applications/{applyment_id}']->patchAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
  'json' => [
    'domains' => ['string'],
    'business_description' => '腾讯于1998年11月成立，是一家互联网公司，通过技术丰富互联网用户的生活，助力企业数字化升级。我们的使命是“用户为本 科技向善”',
    'company_register_cert' => '6uqyGjvHzOhsLleGFQVRF',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics' => ['MediaId'],
    'website_state' => 'HAS_LAUNCHED',
    'website_url' => 'https://qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->merchant->h5->permission->applications->_applyment_id_->patch([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
  'json' => [
    'domains' => ['string'],
    'business_description' => '腾讯于1998年11月成立，是一家互联网公司，通过技术丰富互联网用户的生活，助力企业数字化升级。我们的使命是“用户为本 科技向善”',
    'company_register_cert' => '6uqyGjvHzOhsLleGFQVRF',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics' => ['MediaId'],
    'website_state' => 'HAS_LAUNCHED',
    'website_url' => 'https://qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/merchant/h5/permission/applications/{applyment_id}')->patch([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
  'json' => [
    'domains' => ['string'],
    'business_description' => '腾讯于1998年11月成立，是一家互联网公司，通过技术丰富互联网用户的生活，助力企业数字化升级。我们的使命是“用户为本 科技向善”',
    'company_register_cert' => '6uqyGjvHzOhsLleGFQVRF',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics' => ['MediaId'],
    'website_state' => 'HAS_LAUNCHED',
    'website_url' => 'https://qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/merchant/h5/permission/applications/{applyment_id}']->patch([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'applyment_id' => '100000',
  'json' => [
    'domains' => ['string'],
    'business_description' => '腾讯于1998年11月成立，是一家互联网公司，通过技术丰富互联网用户的生活，助力企业数字化升级。我们的使命是“用户为本 科技向善”',
    'company_register_cert' => '6uqyGjvHzOhsLleGFQVRF',
    'website_business_page_pics' => ['MediaId'],
    'website_homepage_pics' => ['MediaId'],
    'website_state' => 'HAS_LAUNCHED',
    'website_url' => 'https://qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号
| domains | string[] | H5支付域名
| business_description | string | 公司介绍和业务描述
| transaction_limit_type | string | 限额类型
| company_register_cert | string | 公司注册资质证书
| website_business_page_pics | string[] | 
| website_homepage_pics | string[] | 
| website_state | string | 子商户经营网址状态
| website_url | string | 子商户H5经营网址
| applyment_id | integer | 申请单号
| audit_reject_detail | string | 驳回原因
| applyment_state | string | 申请单状态
| applyment_type | string | 申请单类型
| notify_url | string | 商户提供的审核结果回调接口

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_4_3.shtml)
