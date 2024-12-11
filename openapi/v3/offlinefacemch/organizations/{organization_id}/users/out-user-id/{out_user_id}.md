# 查询及更新K12离线刷脸用户信息 {#mix}

## 刷脸用户信息查询接口 {#get}



| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| organization_id {data-required} | string | 机构ID
| out_user_id {data-required} | string | 商户刷脸用户ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlinefacemch->organizations->_organization_id_->users->outUserId->_out_user_id_->getAsync([
  'organization_id' => '',
  'out_user_id' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlinefacemch/organizations/{organization_id}/users/out-user-id/{out_user_id}')->getAsync([
  'organization_id' => '',
  'out_user_id' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/offlinefacemch/organizations/{organization_id}/users/out-user-id/{out_user_id}']->getAsync([
  'organization_id' => '',
  'out_user_id' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlinefacemch->organizations->_organization_id_->users->outUserId->_out_user_id_->get([
  'organization_id' => '',
  'out_user_id' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlinefacemch/organizations/{organization_id}/users/out-user-id/{out_user_id}')->get([
  'organization_id' => '',
  'out_user_id' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlinefacemch/organizations/{organization_id}/users/out-user-id/{out_user_id}']->get([
  'organization_id' => '',
  'out_user_id' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| use_id | string | 刷脸用户ID
| out_user_id | string | 商户刷脸用户ID
| organization_id | string | 机构ID
| user_name | string | 姓名
| user_type | string | 用户类型<br/>`STUDENT` \| `STUFF` 枚举值之一
| student_info | object {data-tooltip="对应PHP的array"} | 学生信息
| class_name {data-indent=1} | string | 班级名
| staff_info | object {data-tooltip="对应PHP的array"} | 职工信息
| occupation {data-indent=1} | string | 职业
| status | string | 用户状态<br/>`NORMAL` \| `DISABLED` 枚举值之一
| contract_state | string | 签约状态<br/>`NOT_CONTRACTED` \| `TERMINATED` \| `CONTRACTED` 枚举值之一
| face_image_ok | boolean | 人脸图片上传状态
| contract_id | string | 签约ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/k12-development-guidelines.html)

## 刷脸用户信息修改接口 {#patch}

若修改了学生姓名、班级、手机号时，需调用接口同步给微信侧，否则可能导致小助手上记录欠款的学生姓名、班级与实际不符合以及学生刷脸验证手机号时无法通过。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| organization_id {data-required} | string | 机构ID
| out_user_id {data-required} | string | 商户刷脸用户ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| user_name {data-indent=1} | string | 姓名
| user_type {data-indent=1} | string | 用户类型<br/>`STUDENT` \| `STUFF` 枚举值之一
| student_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 学生信息
| class_name {data-indent=2} | string | 班级名
| staff_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 职工信息
| occupation {data-indent=2} | string | 职业
| status {data-indent=1} | string | 状态<br/>`NORMAL` \| `DISABLED` 枚举值之一
| phone {data-indent=1} | string | 手机号
| headers | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlinefacemch->organizations->_organization_id_->users->outUserId->_out_user_id_->patchAsync([
  'organization_id' => '',
  'out_user_id' => '',
  'json' => [
    'user_name'    => '',
    'user_type'    => 'STUDENT',
    'student_info' => [
      'class_name' => '',
    ],
    'staff_info'   => [
      'occupation' => '',
    ],
    'status'       => 'NORMAL',
    'phone'        => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlinefacemch/organizations/{organization_id}/users/out-user-id/{out_user_id}')->patchAsync([
  'organization_id' => '',
  'out_user_id' => '',
  'json' => [
    'user_name'    => '',
    'user_type'    => 'STUDENT',
    'student_info' => [
      'class_name' => '',
    ],
    'staff_info'   => [
      'occupation' => '',
    ],
    'status'       => 'NORMAL',
    'phone'        => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/offlinefacemch/organizations/{organization_id}/users/out-user-id/{out_user_id}']->patchAsync([
  'organization_id' => '',
  'out_user_id' => '',
  'json' => [
    'user_name'    => '',
    'user_type'    => 'STUDENT',
    'student_info' => [
      'class_name' => '',
    ],
    'staff_info'   => [
      'occupation' => '',
    ],
    'status'       => 'NORMAL',
    'phone'        => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlinefacemch->organizations->_organization_id_->users->outUserId->_out_user_id_->patch([
  'organization_id' => '',
  'out_user_id' => '',
  'json' => [
    'user_name'    => '',
    'user_type'    => 'STUDENT',
    'student_info' => [
      'class_name' => '',
    ],
    'staff_info'   => [
      'occupation' => '',
    ],
    'status'       => 'NORMAL',
    'phone'        => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/offlinefacemch/organizations/{organization_id}/users/out-user-id/{out_user_id}')->patch([
  'organization_id' => '',
  'out_user_id' => '',
  'json' => [
    'user_name'    => '',
    'user_type'    => 'STUDENT',
    'student_info' => [
      'class_name' => '',
    ],
    'staff_info'   => [
      'occupation' => '',
    ],
    'status'       => 'NORMAL',
    'phone'        => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/offlinefacemch/organizations/{organization_id}/users/out-user-id/{out_user_id}']->patch([
  'organization_id' => '',
  'out_user_id' => '',
  'json' => [
    'user_name'    => '',
    'user_type'    => 'STUDENT',
    'student_info' => [
      'class_name' => '',
    ],
    'staff_info'   => [
      'occupation' => '',
    ],
    'status'       => 'NORMAL',
    'phone'        => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/access-specifications.html)
