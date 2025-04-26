# 查询及修改子商户信息（融合钱包） {#mix}

## 查询子商户（融合钱包） {#get}

用于机构查询子商户创建是否成功，接口只提供单个子商户信息查询。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| sub_mchid {data-required} | string | 子商户号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sp_appid {data-required data-indent=1} | string | 机构appid
| sp_mchid {data-required data-indent=1} | string | 机构商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->merchants->_sub_mchid_->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sub_mchid' => '20000100',
  'query' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/merchants/{sub_mchid}')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sub_mchid' => '20000100',
  'query' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/merchants/{sub_mchid}']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sub_mchid' => '20000100',
  'query' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->merchants->_sub_mchid_->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sub_mchid' => '20000100',
  'query' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/merchants/{sub_mchid}')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sub_mchid' => '20000100',
  'query' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/merchants/{sub_mchid}']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sub_mchid' => '20000100',
  'query' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 子商户号
| name {data-required} | string | 子商户全称
| shortname {data-required} | string | 子商户简称
| office_phone {data-required} | string | 公司联系方式
| merchant_country_code {data-required} | string | 册国家或区域
| business_category {data-required} | integer | 类目
| contact | object {data-tooltip="对应PHP的array"} | 联系人信息
| name {data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人名称
| phone {data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人电话
| email {data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人邮箱
| merchant_type | string | 商户类型<br/>`ENTERPRISE` \| `INDIVIDUAL` 枚举值之一
| registration_certificate_number | string | 公司注册文件编号
| registration_certificate_date | string | 公司注册文件过期时间
| settlement_bank_number | string | 子商户结算账户
| business | object {data-tooltip="对应PHP的array"} | 业务信息
| business_type {data-indent=1} | string | 业务类型<br/>`ONLINE` \| `OFFLINE` \| `BOTH` 枚举值之一
| app_download {data-indent=1} | string | APP下载地址
| website {data-indent=1} | string | 业务网站
| office_account {data-indent=1} | string | 公众号
| mini_program {data-indent=1} | string | 小程序
| store_address {data-indent=1} | string | 门店地址
| mcc {data-indent=1} | string | MCC码
| director | object {data-tooltip="对应PHP的array"} | 董事信息
| name {data-indent=1} | string | 董事姓名
| number {data-indent=1} | string | 董事证件号码
| principal | object {data-tooltip="对应PHP的array"} | 负责人信息
| name {data-indent=1} | string | 负责人姓名
| number {data-indent=1} | string | 负责人证件号码

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4012354686)

## 修改子商户（融合钱包） {#patch}

用于机构子商户创建成功后，接口提供子商户信息修改

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_appid {data-required data-indent=1} | string | 机构appid
| sp_mchid {data-required data-indent=1} | string | 机构商户号
| name {data-required data-indent=1} | string | 子商户全称
| sub_mchid {data-required data-indent=1} | string | 子商户号
| shortname {data-required data-indent=1} | string | 子商户简称
| office_phone {data-required data-indent=1} | string | 公司电话
| contact {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 联系人信息
| name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人名称
| phone {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人电话
| email {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人邮箱
| business_category {data-required data-indent=1} | integer | 类目
| channel_id {data-indent=1} | string | 渠道号
| merchant_country_code {data-required data-indent=1} | string | 注册国家或区域
| merchant_type {data-required data-indent=1} | string | 商户类型<br/>`ENTERPRISE` \| `INDIVIDUAL` 枚举值之一
| registration_certificate_number {data-required data-indent=1} | string | 公司注册文件编号
| registration_certificate_date {data-required data-indent=1} | string | 公司注册文件过期时间
| registration_certificate_copy {data-indent=1} | string | 公司注册文件照片
| settlement_bank_number {data-indent=1} | string | 子商户银行结算账户信息
| business {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 业务信息
| business_type {data-required data-indent=2} | string | 业务类型<br/>`ONLINE` \| `OFFLINE` \| `BOTH` 枚举值之一
| app_download {data-indent=2} | string | APP下载链接
| website {data-indent=2} | string | 业务网站
| office_account {data-indent=2} | string | 公众号
| mini_program {data-indent=2} | string | 小程序
| store_address {data-indent=2} | string | 门店地址
| store_photos {data-indent=2} | string | 门店照片
| mcc {data-indent=2} | string | MCC码
| director {data-indent=1} | object {data-tooltip="对应PHP的array"} | 董事信息
| name {data-indent=2} | string | 董事姓名
| number {data-indent=2} | string | 董事证件号
| principal {data-indent=1} | object {data-tooltip="对应PHP的array"} | 负责人信息
| name {data-indent=2} | string | 负责人姓名
| number {data-indent=2} | string | 负责人证件号
| apply_h5_payment {data-indent=1} | boolean | 是否申请H5支付权限
| h5_payment_apply_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | H5支付申请资料资料
| website_url {data-indent=2} | string | H5经营网址
| domains {data-indent=2} | string[] | H5支付域名
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->merchants->_sub_mchid_->patchAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'name'                            => 'Merchant name',
    'sub_mchid'                       => '示例值: 20000100',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoXokv2SDoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => '["Media_id1", "Media_id2", "Media_id3"]',
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'apply_h5_payment'                => true,
    'h5_payment_apply_info'           => [
      'website_url' => 'https://qq.com',
      'domains'     => ['www.qq.com'],
    ],
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
$instance->chain('v3/global/merchants/{sub_mchid}')->patchAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'name'                            => 'Merchant name',
    'sub_mchid'                       => '示例值: 20000100',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoXokv2SDoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => '["Media_id1", "Media_id2", "Media_id3"]',
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'apply_h5_payment'                => true,
    'h5_payment_apply_info'           => [
      'website_url' => 'https://qq.com',
      'domains'     => ['www.qq.com'],
    ],
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
$instance['v3/global/merchants/{sub_mchid}']->patchAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'name'                            => 'Merchant name',
    'sub_mchid'                       => '示例值: 20000100',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoXokv2SDoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => '["Media_id1", "Media_id2", "Media_id3"]',
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'apply_h5_payment'                => true,
    'h5_payment_apply_info'           => [
      'website_url' => 'https://qq.com',
      'domains'     => ['www.qq.com'],
    ],
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
$response = $instance->v3->global->merchants->_sub_mchid_->patch([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'name'                            => 'Merchant name',
    'sub_mchid'                       => '示例值: 20000100',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoXokv2SDoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => '["Media_id1", "Media_id2", "Media_id3"]',
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'apply_h5_payment'                => true,
    'h5_payment_apply_info'           => [
      'website_url' => 'https://qq.com',
      'domains'     => ['www.qq.com'],
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/merchants/{sub_mchid}')->patch([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'name'                            => 'Merchant name',
    'sub_mchid'                       => '示例值: 20000100',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoXokv2SDoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => '["Media_id1", "Media_id2", "Media_id3"]',
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'apply_h5_payment'                => true,
    'h5_payment_apply_info'           => [
      'website_url' => 'https://qq.com',
      'domains'     => ['www.qq.com'],
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/merchants/{sub_mchid}']->patch([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'name'                            => 'Merchant name',
    'sub_mchid'                       => '示例值: 20000100',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoXokv2SDoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => '["Media_id1", "Media_id2", "Media_id3"]',
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'apply_h5_payment'                => true,
    'h5_payment_apply_info'           => [
      'website_url' => 'https://qq.com',
      'domains'     => ['www.qq.com'],
    ],
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
| sub_mchid {data-required} | string | 子商户号
| h5_authorization_state | string | H5支付权限状态<br/>`APPROVED` \| `UNAUTHORIZED` \| `UNDER_REVIEW` \| `REJECTED` \| `UNDER_PUNISHMENT` \| `APPLICATION_FAILED` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_2_3.shtml)
