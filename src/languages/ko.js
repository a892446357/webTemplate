let langs = {
  common: {
    login: '로그인',
    registe: '등록',
    phoneNumber: '전화번호',
    password: '비밀번호',
    memo: 'Input Data',
    modify: '수정',
    save: '저장',
    copy: '복사',
    cancel: '취소',
    previous: '이전',
    next: '다음',
    ok: 'OK',
    email: 'Email'
  },
  header: {
    introduce: '소개',
    characteristic: '특징',
    partners: '파트너',
    buy: '구매',
    exit: '나가기'
  },
  login: {
    forgotPassword: '비밀번호를 잊어버리셨나요?'
  },
  register: {
    verificationCode: '검증 코드',
    confirmPassword: '비밀번호 확인',
    inviteCode: '초대 코드 (옵션)',
    registration: '등록은 귀하가 당사의 서비스 약관에 동의함을 의미합니다. ',
    registration_success: '등록 완료',
    server: '약관에 동의해 주십시오',
    first: 'Please enter your phone number first',
    codeSuccess: 'Verification code sent successfully',
    sendSMS: 'send SMS'
  },
  shop: {
    presentPrice: '기부 금액',
    originalPrice: '원 가격',
    addToCart: '장바구니에 담기',
    cartSummary: '장바구니',
    empty: 'Tinkey를 담아 장바구니를 행복하게 만들기',
    tinkey: 'A Hardware Wallet that Rewards You : Safeguarding your transactions, mining machine, decentralized exchange.',
    superTinkey: 'Tinkey network global super node only 99.'
  },
  cart: {
    countriesAndRegions: '국가/지역',
    postage: '우편번호',
    daysToReach: '배송기간: 3-5일',
    total: '총',
    continue: '계속',
    Payment_method: '기부 수단'
  },
  shopPay: {
    needToPay: '지불 필요',
    paymentAddress: '지불 주소',
    intro1: '추후 신속한 확인을 위해 개인 프로필에 등록된 ETH주소로 결제해 주십시오. ',
    intro2: '추후 신속한 확인을 위해 송금시 "Input Data"를 첨부해 주십시오. . ',
    intro3: '곧 Tinkey에서 결제액을 검토할 것입니다. 송금 확인 뒤 1-2 영업일 이내에 배송 준비 하겠습니다. Tinkey 에서 배송상태를 추적할 수 있습니다.  ',
    paid: '이미 지불했습니다. ',
    paySuccess: '성공적으로 지불 완료됐습니다'
  },
  personalCenter: {
    personalCenter: '개인 센터',
    myProfile: '내 프로필',
    invitationActivities: '추천 활동',
    myTinkey: 'My Tinkey'
  },
  myProfile: {
    basic: '기본',
    account: '계정',
    email: '이메일',
    ethAddress: '이더 주소',
    shippingAddress: '배송지 주소',
    name: '이름',
    countriesAndRegions: '국가/지역',
    postcode: '우편번호',
    detailedAddress: '상세 주소',
    city: '도시',
    province: '도',
    town: '도시',
    street: '도로명',
    intro1: '알림: 모든 주문 상태는 이메일로 알려 드립니다',
    intro2: '공지 사항: 100 % 관심을 가져주세요. 지불 검토를 위해 ETH 수취인 주소를 기입하십시오.'
  },
  invitationActivities: {
    introduction1: '성공적인 채굴자 추천은 0.1ETH의 보상이 지급 됩니다.',
    introduction2: '슈퍼노드의 경우 슈퍼노드를 보유하고 추천하는 사람은 추천인당 50 ETH의 보상을 받게 되며, 슈퍼노드가 아닌 사람의 경우는 20ETH를 보상으로 받게 됩니다.',
    personalLink: '개인 링크',
    inviteCode: '추천 코드',
    numberOfRegisteredPersonsInvited: '등록된 사람 추천수',
    numberOfTinkeyBuyers: 'Tinkey 구매자 수',
    rewarded: '보상받은 토큰',
    activityRules: '활동 룰',
    copy: '성공 복제',
    intro1: '슈퍼 레퍼럴 프로그램이 당신을 원합니다',
    intro2: '등록하고 본인의 레퍼럴 링크를 공유하세요 (QR 코드 혹은 레퍼럴 ID)',
    intro3: '본인의 레퍼럴 링크를 통해 등록하도록 친구들을 초대하세요',
    intro4: '모든 유효한 초대에 0.1ETH를 드립니다. 개수 제한은 없습니다 '
  },
  activityRule: {
    title: '프로그램 세부 정보',
    back: 'Back',
    intro1: '레퍼럴을 받은 사람이 등록을 완료하고 Tinkey를 구매하는 한 특정한 수수료 보상을 받을 수 있습니다.',
    intro2: '구매로 이어지는 초청은 최대 한도 없이 0.1 ETH의 보상을 받습니다.',
    intro3: '슈퍼노드를 성공적으로 추천하면 50 ETH의 보상을 받습니다. 슈퍼노드 번호는 99개로 제한됩니다. 첫번째 49번은 추천된 할당량이 각각 하나씩만 있습니다. 마지막 49개의 슈퍼노드는 처음 49개 노드의 추천을 받습니다.',
    intro4: '소개할수 있는 친구의 수에는 제한이 없지만, Tinkey.io는 언제든지 레퍼럴 프로그램 규칙을 조정하거나 변경할 수 있는 권한이 있습니다.',
    intro5: '슈퍼노드를 제외한 각 초대받은 사람은 무조건 레퍼럴 링크, QR 코드, 혹은 레퍼럴 ID를 통해 서명해야 합니다.',
    intro6: 'Tinkey.io는 중복 또는 가짜 계정을 확인하고 이러한 계정에 대한 추천 보너스를 지급하지 않습니다. 중복되거나 공유되는 재정은 실격으로 처리됩니다.',
    intro7: '중요한 주의 사항',
    intro8: 'Tinkey.io는 시장 상황의 변화, 사기의 위험 또는 우리가 관련이 있다고 생각하는 다른 요인들로 인해 언제든지 레퍼럴 프로그램의 조건을 변경할 권리가 있습니다.'
  },
  myTinkey: {
    buyTinkey: 'Tinkey 가져 오기',
    tinkeyInfo: 'Tinkey 정보',
    number: 'No.',
    tinkeyID: 'TinkeyID',
    cloudBackup: '클라우드 백업',
    orders: '기부 기록',
    creationTime: '생성 시간',
    trackingNumber: '트래킹 넘버',
    state: '상태',
    goods: '굿즈',
    quantity: '개수',
    amount: '양',
    name: '이름',
    detailedAddress: '상세 주소',
    unpaid: '미납',
    paidAndUnshipped: '지불완료 / 배송 전',
    shipped: '배송 완료',
    delivered: '목적지 도착',
    returned: '반송',
    yes: '네',
    no: '아니오'
  },
  validate: {
    phone: '휴대전화 번호 입력해 주세요',
    password: '비밀번호를 입력해 주세요',
    confirmPassword: '비밀번호가 맞지 않습니다, 다시 입력해 주세요. ',
    smsCode: 'Please enter the verification code'
  },
  index: {
    part1: {
      title1: '돈을 만드는 지갑',
      title2: '독자적인 트레이딩 보디가드, 마이닝 머신, 탈중앙화 거래소 그리고 돈을 얻는 인공지능',
      title3: '당신에게 보상을 주는 하드웨어 지갑',
      title4: '트랜잭션, 마이닝 머신, 탈중앙화 거래소, 인공지능 기반 거래 툴 일체를 보호합니다',
      title5: '구매',
      title6: '안드로이드',
      title7: 'Tinkey 앱 다운로드',
      title8: '가입하기',
      title9: 'MP 다운로드'
    },
    part2: {
      title1: '멋진 기능이 있는 지갑',
      title2: '손바닥안에서 토큰을 마이닝하고 거래 하세요',
      title3: '채굴 확인',
      title4: '채굴 확인하는데 Tinkey를 사용하여 로그인'
    },
    part3: {
      title1: '인공지능 기반 트레이딩 툴',
      title2: `우리의 인공지능 툴은 다양한 전략을 제공하고 거래 상황을 감시하며 거래를 수행합니다. `
    },
    part4: {
      title1: '계정 및 개인정보 보호를 위한 이중 보호',
      title2: `한번의 클릭으로 거래소에 로그인; KYC 반복할 필요 없다`,
      title3: '독립적인 R&D',
      title4: '소프트웨어와 하드웨어 최적화 그리고 지속적인 하드웨어 지원와 업그레이드',
      title5: '오픈 소스코드',
      title6: '개발자 코드는 하드웨어 개발에 대한 전문적인 지식이 공개된 깃헙에서 볼 수 있습니다',
      title7: '지속적인 업그레이드',
      title8: '하드웨어와 소프트웨어 둘 다 지속적인 업그레이드'
    },
    part5: {
      title1: '오픈 소스',
      title2: '소프트웨어와 하드웨어',
      title3: '지갑 소프트웨어 소스 코드는 깃헙에서 오픈 소스로 제공되며 하드웨어 관련 기술 세부 사항 공개.',
      title4: '깃헙에서 보기'
    },
    part6: {
      title1: '파트너'
    },
    part7: {
      title1: '보상을 해주는 하드웨어 지갑. 트랜잭션, 마이닝 머신, 탈중앙화 거래소, 인공지능 기반 거래 툴 일체를 보호합니다.',
      title2: '지금 가입하기'
    },
    part8: {
      title1: '뉴스레터 구독하기',
      title2: '이메일 주소',
      title3: '구독하기',
      title4: '감사합니다! 빠른 시일안에 이메일로 찾아뵙겠습니다. ',
      title5: '웁스! 양식을 제출하는 동안 문제가 발생했습니다. ',
      title6: '홈',
      title7: '소개',
      title8: '특징',
      title9: '파트너',
      title10: '몰',
      title11: '로그인',
      title12: '등록',
      title13: '개인정보 보호 정책',
      title14: '이용 약관',
      title15: '법적'
    },
    part9: {
      title1: '홈',
      title2: '특징',
      title3: '파트너',
      title4: '기부하기',
      title5: '계정',
      title6: '법적',
      title7: '개인정보 보호 정책',
      title8: '이용 약관',
      title9: '소개',
      title10: 'Contact us'
    }
  },
  error_code: {
    SUCCESS: '성공',
    email: '이메일 형식 오류',
    password: '6~16개의 숫자와 문자의 조합을 입력하시오',
    passwordAgain: '비밀번호가 일치하지 않습니다. 다시 입력하십시오. ',
    telephone: '유효한 휴대전화 번호를 입력하십시오. ',
    emailRequired: '이메일 주소를 입력하십시오. ',
    ethAddressRequired: 'ETH 주소를 입력하십시오. ',
    nameRequired: '성함을 입력하십시오.',
    postcodeRequired: '우편번호를 입력하십시오. ',
    phoneRequired: '휴대전화 번호를 입력하십시오. ',
    provinceRequired: '지역을 입력하십시오. ',
    cityRequired: '도시를 입력하십시오. ',
    townRequired: '구를 입력하십시오',
    streetRequired: '도로명을 입력하십시오. ',
    USERNAME_IS_NULL: '사용자 이름이 비어있습니다. ',
    PASSWORD_IS_NULL: '비밀번호가 비어있습니다. ',
    USERNAME_NOT_FOUNT: '사용자 이름을 찾을 수 없습니다. ',
    PASSWORD_ERROR: '잘못된 암호',
    ACCOUNT_ALREADY_LOCKED: '계정이 잠겼습니다. 1 시간 후에 다시 시도하십시오. ',
    USER_NOT_FOUNT: '사용자를 찾을 수 없습니다. ',
    PASSWORD_NOT_SAME: '비밀번호가 틀렸습니다.',
    PRODUCT_NOT_FOUND: '제품을 찾을 수 없습니다.',
    ADD_TO_CART_SUCCESS: '장바구니 추가에 성공',
    PARAMETER_ERROR: '매개 변수 오류',
    ILLEGAL_OPERATION: '불법 작업',
    USER_PROFILE_IMPERFECT: '완료되지 않은 프로필',
    CART_IS_EMPTY: '장바구니가 비어있습니다. ',
    ORDER_ALREADY_PAID: '주문 지불 완료',
    Server_Error: 'Server Error',
    USERNAME_LENGTH_ERROR: '사용자 이름 길이 오류',
    PHONE_NUMBER_ALREADY_EXIST: '이미 존재하는 전화번호 입니다',
    SMS_CODE_ERROR: 'SMS 코드 오류',
    SLIDE_VALIDATE_FAIL: '슬라이드 확인 실패',
    PHONE_NUMBER_FORMAT_ERROR: '전화번호 형식 오류',
    PASSWORD_FORMAT_ERROR: '비밀번호 형식 오류',
    CONFIRM_PASSWORD_FORMAT_ERROR: '비밀번호 확인 형식 오류',
    PHONE_NUMBER_TYPE_IS_NULL: '존재하지 않는 전화번호 유형입니다',
    SMS_CODE_FORMAT_ERROR: 'SMS 코드 형식 오류',
    EMAIL_FORMAT_ERROR: '이메일 형식 오류',
    ETH_ADDR_FORMAT_ERROR: 'ETH 주소 형식 오류',
    REAL_NAME_FORMAT_ERROR: '실명 형식 오류',
    COUNTRY_FORMAT_ERROR: '국가 형식 오류',
    CITY_FORMAT_ERROR: '도시 형식 오류',
    STREET_FORMAT_ERROR: '도로명 형식 오류',
    POST_CODE_FORMAT_ERROR: '우편번호 형식 오류',
    CONTACT_PHONE_FORMAT_ERROR: '연락처 번호 형식 오류',
    DEFAULT_ADDR_IS_NULL: '존재하지 않는 기본 주소입니다',
    USER_ID_IS_NULL: '존재하지 않는 사용자 ID입니다',
    USER_ID_LENGTH_ERROR: '사용자 ID 길이 오류',
    SMS_CODE_INVALID: 'SMS_CODE_INVALID',
    ORDER_ACCEPT_SUCC: 'ORDER_ACCEPT_SUCC',
    ORDER_INVALID: 'ORDER_INVALID',
    ORDER_ACCEPT_FAIL: 'ORDER_ACCEPT_FAIL',
    emailOrPhoneRequired: 'emailOrPhoneRequired',
    USERNAME_ALREADY_EXIST: 'USERNAME_ALREADY_EXIST',
    REGISTER_TYPE_IS_NULL: 'REGISTER_TYPE_IS_NULL',
    SUB_EMAIL_ALREADY_EXIST: 'Email address already exist!',
    ADD_EMAIL_SUBSCRIBER_SUCCESS: 'Subscribe succeed',
    weixinTip: '앱의 다운로드를 위해 위쳇의 우측상단을 클릭하여 브라우저로 열어주시기 바랍니다.'
  }
}

export default langs