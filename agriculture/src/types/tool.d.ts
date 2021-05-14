export {};
declare global {
  interface CreateBy {
    user_name: string;
    nickname: string;
    icon_path?: any;
    email: string;
    mobile: string;
  }

  interface Param {
    key: string;
    value: string;
  }

  export interface Tool {
    id: string;
    tool_name: string;
    alias_name: string;
    service_name: string;
    icon_path?: any;
    stage: string;
    is_active: number;
    description: string;
    create_time: Date;
  }

  interface Parameter {
    param: Param[];
    tool: Tool;
  }

  interface LicensesOwned {
    id: string;
    license_value: string;
    effective_date: Date;
    expiration_date: Date;
    exchange_times: number;
    exchange_times_max: number;
    create_time: Date;
    is_active: number;
    tool: string;
  }

  interface Company {
    id: string;
    company_name: string;
    licenses: string[];
    create_time: Date;
    is_active: number;
  }

  interface MembersGroup {
    id: string;
    user_name: string;
    password: string;
    nickname: string;
    email: string;
    mobile: string;
    icon_path?: any;
    rmk: string;
    is_validated: number;
    register_time: Date;
    modify_time?: any;
    is_approved: number;
    reject_reason: string;
    is_active: number;
    licenses_owned: LicensesOwned[];
    last_login_time: Date;
    company: Company;
  }

  interface LicensesOwned2 {
    id: string;
    license_value: string;
    effective_date: Date;
    expiration_date: Date;
    exchange_times: number;
    exchange_times_max: number;
    create_time: Date;
    is_active: number;
    tool: string;
  }

  interface Company2 {
    id: string;
    company_name: string;
    licenses: string[];
    create_time: Date;
    is_active: number;
  }

  interface CreateBy2 {
    id: string;
    user_name: string;
    password: string;
    nickname: string;
    email: string;
    mobile: string;
    icon_path?: any;
    rmk: string;
    is_validated: number;
    register_time: Date;
    modify_time?: any;
    is_approved: number;
    reject_reason: string;
    is_active: number;
    licenses_owned: LicensesOwned2[];
    last_login_time: Date;
    company: Company2;
  }

  interface ProjectScope {
    id: string;
    project_name: string;
    is_active: number;
    description: string;
    create_time: Date;
    modify_time?: any;
    members_group: MembersGroup[];
    create_by: CreateBy2;
    modify_by?: any;
  }

  interface Dataset {
    filename: string;
    path: string;
  }

  interface CreateBy3 {
    id: string;
    user_name: string;
    password: string;
    nickname: string;
    email: string;
    mobile: string;
    icon_path?: any;
    rmk: string;
    is_validated: number;
    register_time: Date;
    modify_time?: any;
    is_approved: number;
    reject_reason: string;
    is_active: number;
    licenses_owned: string[];
    last_login_time: Date;
    company: string;
  }

  interface ProjectScope2 {
    id: string;
    project_name: string;
    is_active: number;
    description: string;
    create_time: Date;
    modify_time?: any;
    members_group: string[];
    create_by: string;
    modify_by?: any;
  }

  interface SelectedDataset {
    id: string;
    dataset_name: string;
    is_active: number;
    is_deleted: number;
    description: string;
    create_time: Date;
    modify_time?: any;
    source: string;
    is_public: number;
    dataset: Dataset[];
    dataset_sample_img: string;
    create_by: CreateBy3;
    modify_by?: any;
    project_scope: ProjectScope2;
  }

  interface ResultOut {
    log_file: string;
    out_zip: string;
  }

  interface SelectedTool {
    params: string;
    datasets: string[];
    result_out: ResultOut[];
    start_time: Date;
    end_time: Date;
    status: string;
    tool: string;
  }

  interface LicensesOwned3 {
    id: string;
    license_value: string;
    effective_date: Date;
    expiration_date: Date;
    exchange_times: number;
    exchange_times_max: number;
    create_time: Date;
    is_active: number;
    tool: string;
  }

  interface Company3 {
    id: string;
    company_name: string;
    licenses: string[];
    create_time: Date;
    is_active: number;
  }

  interface CreateBy4 {
    id: string;
    user_name: string;
    password: string;
    nickname: string;
    email: string;
    mobile: string;
    icon_path?: any;
    rmk: string;
    is_validated: number;
    register_time: Date;
    modify_time?: any;
    is_approved: number;
    reject_reason: string;
    is_active: number;
    licenses_owned: LicensesOwned3[];
    last_login_time: Date;
    company: Company3;
  }

  interface CreateBy5 {
    id: string;
    user_name: string;
    password: string;
    nickname: string;
    email: string;
    mobile: string;
    icon_path?: any;
    rmk: string;
    is_validated: number;
    register_time: Date;
    modify_time?: any;
    is_approved: number;
    reject_reason: string;
    is_active: number;
    licenses_owned: string[];
    last_login_time: Date;
    company: string;
  }

  interface ProjectScope3 {
    id: string;
    project_name: string;
    is_active: number;
    description: string;
    create_time: Date;
    modify_time?: any;
    members_group: string[];
    create_by: string;
    modify_by?: any;
  }

  interface EvalModel {
    id: string;
    model_name: string;
    is_active: number;
    description: string;
    model_type: string;
    model_preprocess: string;
    model_file: string;
    model_param: string;
    model_zip_file: string;
    create_time: Date;
    modify_time?: any;
    source: string;
    is_public: number;
    create_by: CreateBy5;
    modify_by?: any;
    project_scope: ProjectScope3;
  }

  interface MembersGroup2 {
    id: string;
    user_name: string;
    password: string;
    nickname: string;
    email: string;
    mobile: string;
    icon_path?: any;
    rmk: string;
    is_validated: number;
    register_time: Date;
    modify_time?: any;
    is_approved: number;
    reject_reason: string;
    is_active: number;
    licenses_owned: string[];
    last_login_time: Date;
    company: string;
  }

  interface CreateBy6 {
    id: string;
    user_name: string;
    password: string;
    nickname: string;
    email: string;
    mobile: string;
    icon_path?: any;
    rmk: string;
    is_validated: number;
    register_time: Date;
    modify_time?: any;
    is_approved: number;
    reject_reason: string;
    is_active: number;
    licenses_owned: string[];
    last_login_time: Date;
    company: string;
  }

  interface ProjectScope4 {
    id: string;
    project_name: string;
    is_active: number;
    description: string;
    create_time: Date;
    modify_time?: any;
    members_group: MembersGroup2[];
    create_by: CreateBy6;
    modify_by?: any;
  }

  interface TaskScope {
    id: string;
    task_name: string;
    is_active: number;
    description: string;
    create_time: Date;
    modify_time?: any;
    start_time: Date;
    end_time: Date;
    status: string;
    selected_datasets: SelectedDataset[];
    selected_tools: SelectedTool[];
    hits: number;
    create_by: CreateBy4;
    modify_by?: any;
    eval_model: EvalModel;
    project_scope: ProjectScope4;
  }

  interface ToolScope {
    id: string;
    tool_name: string;
    alias_name: string;
    service_name: string;
    icon_path?: any;
    stage: string;
    is_active: number;
    description: string;
    create_time: Date;
  }

  export interface ToolListItem {
    id: string;
    create_by: CreateBy;
    modify_by?: any;
    parameters: string;
    param_group_name: string;
    is_active: number;
    description: string;
    create_time: Date;
    modify_time?: any;
    is_public: number;
    project_scope: ProjectScope;
    task_scope: TaskScope;
    tool_scope: ToolScope;
  }
}
