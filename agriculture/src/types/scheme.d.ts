export {};
declare global {
  interface CreateBy {
    user_name: string;
    nickname: string;
    icon_path?: any;
    email: string;
    mobile: string;
  }

  interface SelectedTool {
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
    licenses_owned: string[];
    last_login_time: Date;
    company: string;
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
    licenses_owned: string[];
    last_login_time: Date;
    company: string;
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

  export interface SchemeListItem {
    id: string;
    create_by: CreateBy;
    modify_by?: any;
    scheme_name: string;
    is_active: number;
    description: string;
    create_time: Date;
    modify_time?: any;
    selected_tools: SelectedTool[];
    is_public: number;
    project_scope: ProjectScope;
  }
}
