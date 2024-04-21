<?php exit; ?>
1713691191
SELECT m.*, u.user_colour, g.group_colour, g.group_type FROM (phpbb1j_moderator_cache m) LEFT JOIN phpbb1j_users u ON (m.user_id = u.user_id) LEFT JOIN phpbb1j_groups g ON (m.group_id = g.group_id) WHERE m.display_on_index = 1
6
a:0:{}